import React from 'react';
import { graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import { withIntl, Link } from '../i18n';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { extractRecipePath } from '../../utils/pathParse';

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
    {data.allMarkdownRemark.edges.map(({ node }) => {
      const path = extractRecipePath(node.fileAbsolutePath);

      return (
        <div key={node.frontmatter.path}>
          <Link to={path}>{node.frontmatter.title}</Link>
        </div>
      );
    })}
  </Layout>
);

export const query = graphql`
  query($locale: String!) {
    allMarkdownRemark(filter: { frontmatter: { locale: { eq: $locale } } }) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default withIntl(IndexPage);
