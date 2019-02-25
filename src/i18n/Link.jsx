import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import LanguageContext from './LanguageContext';

const I18nLink = ({ to, children, ...rest }) => (
  <LanguageContext.Consumer>
    {language => (
      <Link to={`/${language.locale}${to}`} {...rest}>
        {children}
      </Link>        
    )}
  </LanguageContext.Consumer>
);

I18nLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default I18nLink;
