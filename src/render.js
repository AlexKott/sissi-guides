if (! window._babelPolyfill) {
  require('@babel/polyfill');
}

import React from 'react';
import ReactDOM from 'react-dom';

import transformToRoutes from './transformToRoutes';
import SissiPage from './SissiPage';

export default async (EntryComponent) => {
  const response = await fetch('/sissi/__content__');
  const content = await response.json();

  ReactDOM.render(
    <SissiPage routes={transformToRoutes(content)}>
      <EntryComponent />
    </SissiPage>,
    document.querySelector('#sissi')
  );
}
