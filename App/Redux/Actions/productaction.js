import client from '../../api/client.js'

export const getProducts = (keyword = '', ratings = 0, gte = 1, lte = 100000, page = 1, category = '') => async (dispatch) => {
  const link = category.length === 0 ? `/products?ratings[gte]=${ratings}&price[gte]=${gte}&price[lte]=${lte}&page=${page}&keyword=${keyword}` : `/products?ratings[gte]=${ratings}&price[gte]=${gte}&price[lte]=${lte}&page=${page}&keyword=${keyword}&category=${category}`
  console.log(link)
  try {
    dispatch({ type: "ALL_PRODUCTS_PENDING" })

    const res = await client.get(link);
    console.log(res, 'response productacion')
    if (!res.ok) return dispatch({ type: "ALL_PRODUCTS_REJECTED", payload: "Can't Connect At This Moment" })
    dispatch({ type: "ALL_PRODUCTS_FULFILLED", payload: res.data })
  } catch (err) {
    dispatch({ type: "ALL_PRODUCTS_REJECTED", error: err.message || err.response.data.message })

  }
}

export const searchProduct = (keyword = '', ratings = 0, gte = 1, lte = 100000, page = 1, category = '') => async (dispatch) => {
  const link = category.length === 0 ? `/products?ratings[gte]=${ratings}&price[gte]=${gte}&price[lte]=${lte}&page=${page}&keyword=${keyword}` : `/products?ratings[gte]=${ratings}&price[gte]=${gte}&price[lte]=${lte}&page=${page}&keyword=${keyword}&category=${category}`
  console.log(link)
  try {
    dispatch({ type: "SEARCH_PRODUCT_PENDING" })

    const res = await client.get(link);
    console.log(res, 'response productacion')
    if (!res.ok) return dispatch({ type: "SEARCH_PRODUCT_REJECTED", payload: "Can't Connect At This Moment" })
    dispatch({ type: "SEARCH_PRODUCT_FULFILLED", payload: res.data })
  } catch (err) {
    dispatch({ type: "SEARCH_PRODUCT_REJECTED", error: err.message || err.response.data.message })

  }
}

