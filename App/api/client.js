import { create } from 'apisauce'
import { getData } from '../Store/StoreData.js'

const client = create({
  baseURL: 'http://rocky-eyrie-75260.herokuapp.com/api/v1',
  // baseURL: 'http://localhost:4000/api/v1',

})

client.addAsyncRequestTransform(async (request) => {
  const token = await getData('authToken')
  if (token) {
    request.headers['Authorization'] = `Bearer ${token}`
  }
})

export default client

