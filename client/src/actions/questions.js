import {fetchJson} from '../utils/fetch';

const GET_CONTENT = 'GET_CONTENT';
const ITEMS_LOADING = 'ITEMS_LOADING';
const HAS_ERRORS = 'HAS_ERRORS';

const getContent = (content) => ({type: GET_CONTENT, content});
const itemsAreLoading = (bool) => ({ type: ITEMS_LOADING, isLoading: bool});
const hasErrors = (bool) => ({ type: HAS_ERRORS, errors: bool})

const fetchContent = (url) => dispatch => {
  dispatch(itemsAreLoading(true));

  return fetchJson(url)
    .then((response) => {dispatch(itemsAreLoading(false)); return response.json()})
    .then((content) => dispatch(getContent(content)))
    .catch(err => dispatch(hasErrors(true)));
};

export {
  fetchContent,
  GET_CONTENT,
  ITEMS_LOADING,
  HAS_ERRORS
}
