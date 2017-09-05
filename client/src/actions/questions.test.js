import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import React from 'react'
import { GET_CONTENT, ITEMS_LOADING, fetchContent } from './questions'
import nock from 'nock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  const items = [{id:1, title: 'Title 1'}, {id:2, title: 'Title 2'}];
  it('fetches content', () => {
    nock('http://localhost:5000')
      .get('/api/getQuestions')
      .reply(200, {  items })

    const expectedActions = [
      { type: ITEMS_LOADING, isLoading:true },
      { type: ITEMS_LOADING, isLoading:false },
      { type: GET_CONTENT, content: {items: items} }
    ]
    const store = mockStore({ questions: [] });

    return store.dispatch(fetchContent('http://localhost:5000/api/getQuestions')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
