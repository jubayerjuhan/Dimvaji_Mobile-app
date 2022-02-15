import { create } from 'apisauce'

const client = create({
  baseURL: 'http://rocky-eyrie-75260.herokuapp.com/api/v1',
})

export default client

