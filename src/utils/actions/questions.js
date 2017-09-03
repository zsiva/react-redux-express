import axios from "axios";

const GET_TITLES = "GET_TITLES";
const GET_CONTENT = 'GET_CONTENT';
const GET_NAV_CONTENT = 'GET_NAV_CONTENT';
const GET_SUB_NAV_CONTENT = 'GET_SUB_NAV_CONTENT';

const getTitles = (titles, activeNum) => { return {type: GET_TITLES, titles, activeNum}};
const getContent = (content) => ({type: GET_CONTENT, content});
const getNavContent = (navContent, activeNum) => { return {type: GET_NAV_CONTENT, navContent, activeNum}};
const getsubNavContent = (subContent) => { return {type: GET_SUB_NAV_CONTENT, subContent}};

const getAllTitles = () => dispatch => {

  axios.get(`/api/getQuestions`)
    .then((response) => {
      return response.data;
    })
    .then((questions) => {
      dispatch(getContent(questions.cache));
      var navTitles = questions.context.map((i)  => {
          return {
              title: i.title,
              numQues: i.associated_questions,
              eid: i.eid
          }
      });
      dispatch(getNavContent(questions.context, questions.focus.eid))
      dispatch(getsubNavContent(questions.cache))
    })
    .catch((err) => {
      console.log('ERROR', err);
      console.error.bind(err);
    })
};

export {
  getAllTitles,
  GET_TITLES,
  GET_CONTENT,
  GET_NAV_CONTENT,
  GET_SUB_NAV_CONTENT
}
