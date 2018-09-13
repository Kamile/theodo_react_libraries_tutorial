import axios from 'axios'

const valueEndpoint = 'http://localhost:8000/value'

export const incrementValue = async token => {
  const response = await axios({
    method: 'get',
    url: `${valueEndpoint}/increment`,
  })
  return response.data
}

export const getValue = async token => {
  const response = await axios({
    method: 'get',
    url: `${valueEndpoint}/get`,
  })
  return response.data
}
