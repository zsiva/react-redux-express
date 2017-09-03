import axios from "axios";

const GET_CONTENT = 'GET_CONTENT';

const getContent = (content) => ({type: GET_CONTENT, content});

const fetchContent = () => dispatch => {

  axios.get(`/api/getQuestions`)
    .then((response) => {
      return response.data;
    })
    .then((questions) => {
      dispatch(getContent(questions));
    })
    .catch((err) => {
      console.log('ERROR', err);
      console.error.bind(err);
    })
};

export {
  fetchContent,
  GET_CONTENT
}
