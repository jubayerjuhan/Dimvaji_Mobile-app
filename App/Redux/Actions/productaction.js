import client from '../../api/client.js'

export const getProducts = (keyword = '', ratings = 0, gte = 1, lte = 100000, page = 1, category = '') => async (dispatch) => {
  const link = category.length === 0 ? `/products?ratings[gte]=${ratings}&price[gte]=${gte}&price[lte]=${lte}&page=${page}&keyword=${keyword}` : `/products?ratings[gte]=${ratings}&price[gte]=${gte}&price[lte]=${lte}&page=${page}&keyword=${keyword}&category=${category}`
  console.log(link)
  try {
    dispatch({ type: "ALL_PRODUCTS_PENDING" })

    const { data } = await client.get(link);
    dispatch({ type: "ALL_PRODUCTS_FULFILLED", payload: data })
  } catch (err) {
    dispatch({ type: "ALL_PRODUCTS_REJECTED", error: err.message || err.response.data.message })

  }
}
