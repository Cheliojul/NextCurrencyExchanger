import axios from 'axios';

export function getAxios() {
  axios.get('http://localhost:1337/api/restaurants').then((response) => {
    console.log(response);
  });
}
