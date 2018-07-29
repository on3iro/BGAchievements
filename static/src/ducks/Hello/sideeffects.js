import axios from 'axios'

const fetchSampleData = () => axios.get('http://localhost:8080/bga-rest/hello')

export default {
  fetchSampleData
}
