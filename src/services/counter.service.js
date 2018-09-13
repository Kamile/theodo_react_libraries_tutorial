import axios from 'axios'

const valueEndpoint = 'http://localhost:8000/value'

export const incrementValue = async () => {
  const response = await axios({
    method: 'get',
    url: `${valueEndpoint}/increment`,
  })
  // console.log(response);
  return response.data
}

export const getValue = async () => {
  const response = await axios({
    method: 'get',
    url: `${valueEndpoint}/get`,
  })
  return response.data
}
