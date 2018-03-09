import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SissiLink = ({ children, ...props }) => (
  <NavLink {...props} data-type='sissi-internal'>
    {children}
  </NavLink>
);

SissiLink.propTypes = {
  children: PropTypes.node,
};

export default SissiLink;
