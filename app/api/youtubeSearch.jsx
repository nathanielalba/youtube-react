const YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDuOLeKXhK1dj3PlR4mZtEzetLhyu_dA5U';

export default (searchTerm) => {
  YTSearch({key: API_KEY, term: term}, function(data) {
    console.log(data);
  });
};
