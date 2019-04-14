import React from 'react';
import { graphql } from 'gatsby';

import { withIntl } from '../i18n';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import RecipesList from '../components/RecipesList';
import { nodeToRecipe } from '../utils';

const IndexPage = ({ data }) => {
  const recipes = data.allMarkdownRemark.edges.map(({ node }) => nodeToRecipe(node));

  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <RecipesList recipes={recipes} />
    </Layout>
  );
};

export const query = graphql`
  query($locale: String!) {
    allMarkdownRemark(filter: { fields: { locale: { eq: $locale } } }) {
      edges {
        node {
          frontmatter {
            title
            synopsis
          }
          fields {
            id
            ingredients
            path
            cover {
              childImageSharp {
                fluid(maxWidth: 256) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default withIntl(IndexPage);
