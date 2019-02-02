import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
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

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  state = {
    theme: Themer.getTheme()
  };

  handleThemeChange = () => {
    const newTheme = Themer.switchTheme();

    this.setState({ theme: newTheme });
  };

  render() {
    const { children } = this.props;
    const { theme } = this.state;

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <ThemeProvider theme={theme}>
            <Fragment>
              <GlobalStyle />
              <Header
                siteTitle={data.site.siteMetadata.title}
                onThemeChange={this.handleThemeChange}
              />
              <Container>{children}</Container>
            </Fragment>
          </ThemeProvider>
        )}
      />
    );
  }
}
