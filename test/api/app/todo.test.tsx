process.env.NODE_ENV = 'testing'

import chai from 'chai'
import * as enzyme from 'enzyme'
import * as React from 'react'
// import * as ReactDOM from 'react-dom';
import App from '../../../src/App'

import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('*** App component testing', () => {

  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  it('renders no heading', () => {
    const result = enzyme.shallow(<App />).contains(<h1>My Todos</h1>)
    chai.expect(result).to.equal(true)
  })
})
