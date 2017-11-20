import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SissiLink = ({ children, ...props }) => (
  <Link {...props} data-type='sissi-internal'>
    {children}
  </Link>
);

SissiLink.propTypes = {
  children: PropTypes.node,
};

export default SissiLink;
