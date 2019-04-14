import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RecipeItem from './RecipeItem';

const List = styled.ul`
  & > li {
    margin-bottom: 2em;
    display: block;
  }

  & > li:last-child {
    margin-bottom: 0;
  }
`;

const RecipesList = ({ recipes = [] }) => (
  <List>
    {recipes.map(r => (
      <RecipeItem key={r.title} recipe={r} />
    ))}
  </List>
);

RecipesList.propTypes = {
  recipes: PropTypes.array
};

export default RecipesList;
