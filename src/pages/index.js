import React from 'react';
import { graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { withIntl, Link } from '../i18n';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

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
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2">
      <FormattedMessage id="gopage2" />
    </Link>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Link key={node.frontmatter.path} to={node.frontmatter.path}>
        {node.frontmatter.title}
      </Link>
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
