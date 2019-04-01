import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { Link } from '../i18n';

const Item = styled.li`
  background-color: #f8f9fa;
  cursor: pointer;
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0 0 3px #222222;
  }
`;

const PaddedLink = styled(Link)`
  padding: 1.8em 1.4em 1.2em 1.4em;
  display: block;
`;

const Title = styled.h3`
  font-size: 2em;
  font-weight: 400;
  margin: 0;
`;

const Synopsis = styled.p`
  font-size: 1.25em;
  font-weight: 300;
`;

const RecipeItem = ({ recipe }) => {
  const { title, synopsis, ingredients } = recipe;

  return (
    <Item>
      <PaddedLink to={recipe.path}>
        <Title>{title}</Title>
        <Synopsis>{synopsis}</Synopsis>
        <IngredientsList ingredients={ingredients} />
      </PaddedLink>
    </Item>
  );
};

RecipeItem.propTypes = {
  title: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired
};

export default RecipeItem;

const List = styled.ul`
  display: flex;

  & > li {
    font-weight: 300;
    margin-right: 1em;
    color: #868e96;
    text-transform: capitalize;
  }

  & > li:last-child {
    margin-right: 0;
  }
`;

const IngredientsList = ({ ingredients = [] }) => (
  <List>
    {ingredients.map(i => (
      <FormattedMessage key={i} id={i} tagName="li" />
    ))}
  </List>
);

IngredientsList.propTypes = {
  ingredients: PropTypes.array.isRequired
};
