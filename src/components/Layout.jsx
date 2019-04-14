import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';

import Header from './Header';
import GlobalStyle from './GlobalStyle';
import Themer from './Themer';

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

  const [theme, setTheme] = useState(Themer.getTheme());

  const handleThemeChange = () => {
    const newTheme = Themer.switchTheme();
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Header siteTitle={site.siteMetadata.title} onThemeChange={handleThemeChange} />
        <Container>{children}</Container>
      </Fragment>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
