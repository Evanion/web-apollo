import * as React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', ()=>{
  it('should render correctly', () => {
    const render = shallow(<Button>Test button</Button>);
    expect(render).toMatchSnapshot();
  });
})
