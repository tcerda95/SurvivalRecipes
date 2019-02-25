import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Header from './Header';
import GlobalStyle from './GlobalStyle';

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Fragment>
      <GlobalStyle />
      <Header siteTitle={site.siteMetadata.title} />
      <Container>{children}</Container>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
