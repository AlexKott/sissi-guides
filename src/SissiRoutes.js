import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';

const SissiRoutes = ({ routes = [], children }) => (
  <div>
    {routes.map(route => {
      const childrenWithProps = React.cloneElement(children, { ...route });

      return (
        <Route
          exact
          key={route.path === '' ? 'index' : route.path}
          path={route.path}
          render={() => childrenWithProps}
        />
      );
    })}
  </div>
);

SissiRoutes.propTypes = {
  routes: PropTypes.array,
  children: PropTypes.node,
};

export default SissiRoutes;
