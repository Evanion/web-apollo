import * as React from 'react';
import { shallow } from 'enzyme';
import ResetPassword from './ResetPassword';

describe('ResetPassword', ()=>{
  it('should render correctly', () => {
    const render = shallow(<ResetPassword />);
    expect(render).toMatchSnapshot();
  });
})
