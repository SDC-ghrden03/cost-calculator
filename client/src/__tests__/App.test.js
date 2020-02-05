import React from 'react';
import {mount, shallow, render} from "enzyme";
//const App = require('../component/App.jsx');
import {App} from '../component/App.jsx'
import ReactDOM from 'react-dom';

describe('Testing App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App
      cost="1000"
      />
    )
  })
  it('Renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  })
  it('Recieves Props', () => {
    expect(wrapper.props(name)).toBeTruthy();
    console.log("Here are the props:", wrapper.props())
    expect(wrapper.props().cost).toBe('1000');
  })
})


// describe('App', ()=>{
//   let wrapper = renderer.create(<App />)
//   window.fetch = jest.fn();
//   // beforeEach(()=>{
//   //   wrapper = shallow(<App />)
//   // })
//   let component = wrapper.toJSON()
//   it('should match snapshot', ()=>{
//     expect(component).toMatchSnapshot();
//   })
// })