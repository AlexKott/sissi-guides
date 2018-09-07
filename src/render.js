import 'raf/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {
  BrowserRouter,
  StaticRouter,
} from 'react-router-dom';

import buildRouteContent from './buildRouteContent';
import SissiRoutes from './SissiRoutes';

export function render(EntryComponent, content) {
  if (process.env.NODE_ENV === 'development') {
    ReactDOM.render(
      <BrowserRouter>
        <SissiRoutes routes={buildRouteContent(content)}>
          <EntryComponent />
        </SissiRoutes>
      </BrowserRouter>,
      document.querySelector('#sissi')
    );
  }
}

export function renderStatic(EntryComponent, content, url) {
  return ReactDOMServer.renderToStaticMarkup(
    <StaticRouter location={url} context={{}}>
      <SissiRoutes routes={buildRouteContent(content)}>
        <EntryComponent />
      </SissiRoutes>
    </StaticRouter>
  );
}
