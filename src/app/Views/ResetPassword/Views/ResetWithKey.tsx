import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface Props{
  match: {
    params: {
      key: string;
    }
  }
}

const ResetWithKey = ({match:{params: {key}}}:Props) => (
  <div>Reset with key</div>
);

export default ResetWithKey;
