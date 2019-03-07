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
      <div key={node.fields.id}>
        <Link to={node.fields.path}>{node.frontmatter.title}</Link>
        <IngredientList ingredients={node.fields.ingredients} />
      </div>
    ))}
  </Layout>
);

const IngredientList = ({ ingredients }) => (
  <ul>
    {ingredients.map(ingredient => (
      <li key={ingredient}>
        <FormattedMessage id={ingredient} />
      </li>
    ))}
  </ul>
);

export const query = graphql`
  query($locale: String!) {
    allMarkdownRemark(filter: { fields: { locale: { eq: $locale } } }) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            id
            ingredients
            path
          }
        }
      }
    }
  }
`;

export default withIntl(IndexPage);
