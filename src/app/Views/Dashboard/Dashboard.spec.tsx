import * as React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

describe('Dashboard', ()=>{
  it('should render correctly', () => {
    const render = shallow(<Dashboard />);
    expect(render).toMatchSnapshot();
  });
})
