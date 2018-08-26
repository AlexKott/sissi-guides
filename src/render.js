if (! window._babelPolyfill) {
  require('@babel/polyfill');
}

import 'whatwg-fetch';
import 'raf/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import transformToRoutes from './transformToRoutes';
import SissiPage from './SissiPage';

export default async (EntryComponent, content) => {
  if (process.env.NODE_ENV === 'production') {
    const response = await fetch('/sissi/__content__');
    content = await response.json();
  }

  ReactDOM.render(
    <SissiPage routes={transformToRoutes(content)}>
      <EntryComponent />
    </SissiPage>,
    document.querySelector('#sissi')
  );
}
