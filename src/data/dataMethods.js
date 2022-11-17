import axios from 'axios';

function getApiData(url, savedData) {
  axios.get(url)
  .then (result => {
    savedData = result.data;
    console.log(savedData);
  })
}

export {getApiData};