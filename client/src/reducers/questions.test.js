import reducer from './questions'
import {ITEMS_LOADING, GET_CONTENT, fetchContent, itemsAreLoading} from '../actions/questions'

describe('questions reducer', () => {
  it('should check if items are loading', () => {
    expect(
      reducer([], {
        type: ITEMS_LOADING,
        isLoading: true
      })
    ).toEqual(
      {
        isLoading: true
      }
    )
  })

  it('should get the content', () => {
    var mockContent = {header : 'Title', body: 'Content'};
    expect(
      reducer([], {
        type: GET_CONTENT,
        content: mockContent
      })
    ).toEqual(
      {
        content: mockContent
      }
    )
  })
})
