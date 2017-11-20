import React from 'react';
import ReactDOM from 'react-dom';

import SissiPage from './SissiPage';

export default (EntryComponent, routes) => {
  ReactDOM.render(
    <SissiPage routes={routes}>
      <EntryComponent />
    </SissiPage>,
    document.querySelector('#sissi')
  );
}
