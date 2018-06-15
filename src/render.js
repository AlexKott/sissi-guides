import React from 'react';
import ReactDOM from 'react-dom';

import transformToRoutes from './transformToRoutes';

import SissiPage from './SissiPage';

export default (EntryComponent, content) => {
  ReactDOM.render(
    <SissiPage routes={transformToRoutes(content)}>
      <EntryComponent />
    </SissiPage>,
    document.querySelector('#sissi')
  );
}
