import * as React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', ()=>{
  it('should render correctly', () => {
    const render = shallow(<Login />);
    expect(render).toMatchSnapshot();
  });
})
