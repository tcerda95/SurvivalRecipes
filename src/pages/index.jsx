import React from 'react';
import { graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import { withIntl, Link } from '../i18n';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { extractRecipePath, extractRecipeDir } from '../../utils/pathParse';
import recipesMetadata from './recipes/metadata.json';

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
      const recipe = extractRecipeDir(node.fileAbsolutePath);
      const { ingredients } = recipesMetadata[recipe];

      return (
        <div key={recipe}>
          <Link to={path}>{node.frontmatter.title}</Link>
          <IngredientList ingredients={ingredients} />
        </div>
      );
    })}
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
