import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe("App", () => {
  it ('renders successfully', () => {
    let wrapper = shallow(<App />)
    expect(wrapper.find('div').length).toEqual(1)
  })
})
