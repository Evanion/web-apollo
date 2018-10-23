import { configure, addDecorator } from '@storybook/react';
// import { withTests } from '@storybook/addon-jest';
import { configureViewport } from '@storybook/addon-viewport';
import { checkA11y } from '@storybook/addon-a11y';


import results from '../jest-test-results.json';

// automatically import all files ending in *.stories.js
const req = require.context('../src/app', true, /.stories.tsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(checkA11y);
configure(loadStories, module);
configureViewport();
/*
addDecorator(
  withTests({
    results,
    filesExt: { filesExt: ".spec.tsx" },
  })
);
*/
