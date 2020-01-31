import React from 'react';
import {shallow} from "enzyme";
//const App = require('../component/App.jsx');
import {App} from '../component/App.jsx'
import renderer from "react-test-renderer";

describe('App', ()=>{
  let wrapper = renderer.create(<App />)
  window.fetch = jest.fn();
  // beforeEach(()=>{
  //   wrapper = shallow(<App />)
  // })
  let component = wrapper.toJSON()
  it('should match snapshot', ()=>{
    expect(component).toMatchSnapshot();
  })
})