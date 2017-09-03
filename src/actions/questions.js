import fetch from 'isomorphic-fetch'

const GET_CONTENT = 'GET_CONTENT';
const ITEMS_LOADING = 'ITEMS_LOADING';

const getContent = (content) => ({type: GET_CONTENT, content});
const itemsIsLoading = (bool) => ({ type: ITEMS_LOADING, isLoading: bool});

const fetchContent = (url) => dispatch => {
  fetch(url, {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
    .then((response) => {
      dispatch(itemsIsLoading(true));
      return response.json();
    })
    .then((content) => {
      dispatch(getContent(content));
      dispatch(itemsIsLoading(false));
    })
    .catch((err) => {
      console.log('ERROR', err);
      console.error.bind(err);
    })
};

export {
  fetchContent,
  GET_CONTENT,
  ITEMS_LOADING
}
