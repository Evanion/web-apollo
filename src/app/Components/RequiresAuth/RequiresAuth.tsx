import * as React from 'react';
import {Redirect} from 'react-router-dom';

export interface Props {
  children: React.ReactNode;
  userStore?: any;
}

class RequiresAuth extends React.PureComponent<Props> {
  render(){
    const {children} = this.props;
    if(!true){
      return <Redirect to={'/login'} />;
    }
    return children;
  }
}

export default RequiresAuth;
