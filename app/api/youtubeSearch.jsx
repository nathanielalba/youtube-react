import axios from 'axios';

const API_KEY = 'AIzaSyDuOLeKXhK1dj3PlR4mZtEzetLhyu_dA5U';

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export default (searchTerm, callback) => {

  const params = {
    part: 'snippet',
    key: API_KEY,
    q: searchTerm,
    type: 'video'
  }

  axios.get(ROOT_URL, { params: params })
       .then(function(response) {
         if(callback) { callback(response.data.items) }
       })
       .catch(function(err) {
         console.log(err);
       });
};
