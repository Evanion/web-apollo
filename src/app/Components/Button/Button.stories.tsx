import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Button from './Button'

storiesOf('Button', module)
  // @ts-ignore
  .addDecorator(withKnobs)
  .add('with text', () => <Button onClick={action('clicked')} disabled={boolean('Disabled', false)}>{text('Label', 'Hello Storybook')}</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')} disabled={boolean('Disabled', false)}>
      <span role="img" aria-label="so cool">
      {text('Label', '😀 😎 👍 💯')}
      </span>
    </Button>
  ));
