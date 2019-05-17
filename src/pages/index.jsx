import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { withIntl } from '../i18n';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import RecipesListHeader from '../components/RecipesListHeader';
import RecipesList from '../components/RecipesList';
import { nodeToRecipe } from '../utils';

const IndexPage = ({ data }) => {
  const recipes = data.allMarkdownRemark.edges.map(({ node }) => nodeToRecipe(node));
  const [searchValue, setSearchValue] = useState('');

  // Check only if search filter value is a substring of the recipe title
  const filteredRecipes = recipes.filter(r =>
    r.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <RecipesListHeader onChange={setSearchValue} value={searchValue} />
      <RecipesList recipes={filteredRecipes} />
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
