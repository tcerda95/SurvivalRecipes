import React from 'react';
import { graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { withIntl, Link } from '../i18n';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1>
      <FormattedMessage id="hello" />
    </h1>
    <p>
      <FormattedMessage id="welcome" />
    </p>
    <p>
      <FormattedMessage id="build" />
    </p>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.frontmatter.path}>
        <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
      </div>
    ))}
  </Layout>
);

export const query = graphql`
  query($locale: String!) {
    allMarkdownRemark(filter: { frontmatter: { locale: { eq: $locale } } }) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

export default withIntl(IndexPage);
