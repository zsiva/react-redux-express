import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './index.js';
import { shallow, mount } from 'enzyme';

describe('>>>APP --- Shallow Render REACT COMPONENTS',()=>{
  const items = [{
      "id":1,
      "title": "Title 1",
    },
    {
      "id": 2,
      "title": "Title 2",
  }]
    let wrapper =  shallow(<App items={items}/>)

    it('Render App without crashing', () => {
       expect(wrapper.length).toEqual(1)
    });

    it('renders  <App /> with props', () => {
      expect(wrapper.find('li')).toHaveLength(2);

    });

});
