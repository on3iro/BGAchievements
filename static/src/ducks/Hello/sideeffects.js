import axios from 'axios'

const fetchSampleData = () => {
  return new Promise((resolve) => {
    // timeout for demonstration purposes
    setTimeout(() => axios.get('http://localhost:8080/bga-rest/hello').then(
      (response) => resolve(response)
    ), 3000)
  })
}

export default {
  fetchSampleData
}
