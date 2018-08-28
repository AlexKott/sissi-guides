import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

const SissiPage = ({ routes = [], children }) => (
  <BrowserRouter>
    <div>
      {routes.map(route => {
        const childrenWithProps = React.cloneElement(children, { ...route });

        return (
          <Route
            exact
            key={route.path === '' ? route.path : 'index'}
            path={route.path}
            render={() => childrenWithProps}
          />
        );
      })}
    </div>
  </BrowserRouter>
);

SissiPage.propTypes = {
  routes: PropTypes.array,
  children: PropTypes.node,
};

export default SissiPage;
