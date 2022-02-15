import client from "../../api/client.js"


export const placeOrder = (shipping, user, items) => async (dispatch) => {
  shipping.city = shipping.area;
  shipping.phoneNumber = shipping.phone;
  let totalPrice = 0;
  items.forEach(item => {
    totalPrice += item.price * item.quantity;
  })
  const order = {
    shippingInfo: shipping,
    orderItems: items,
    paymentInfo: {
      id: user._id,
      status: "COD",
    },
    paidAt: Date.now(),

    priceBreakdown: {
      subtotal: totalPrice,
      gst: 0,
      shippingCharge: 0,
      totalPrice,
    }
  }
  console.log(order)
  try {
    dispatch({ type: 'ORDER_PENDING' })
    const { data } = await client.post('/order/new', order)

    if (data.success === false) return dispatch({ type: 'ORDER_FAILED', payload: data.message })

    dispatch({ type: 'ORDER_SUCCESS' })

  } catch (error) {
    console.log(error)
    dispatch({ type: 'ORDER_FAILED', payload: error.response.data.message })
  }

}