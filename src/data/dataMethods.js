import axios from 'axios';
function getApiData(url) {
  return axios.get(url)
}
export {getApiData};