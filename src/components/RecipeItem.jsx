import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Img from 'gatsby-image';

import { Link } from '../i18n';
import device from './device';

const Item = styled.li`
  background-color: #f8f9fa;
  cursor: pointer;
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0 0 3px #222222;
  }
`;

const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
`;

const Cover = styled(Img)`
  flex: 1;
`;

const InfoSection = styled.div`
  flex: 3;
  margin: 0 1em;

  @media ${device.mobile} {
    flex: 2;
  }
`;

const Title = styled.h3`
  font-size: 1.8em;
  font-weight: 400;
  margin: 0;

  @media ${device.mobile} {
    font-size: 5.25vw;
  }
`;

const Synopsis = styled.p`
  font-size: 1.1em;
  font-weight: 300;

  @media ${device.mobile} {
    font-size: 3.3vw;
    margin: 0.75em 0 1em 0;
  }
`;

const RecipeItem = ({ recipe }) => {
  const { path, cover, title, synopsis, ingredients } = recipe;

  return (
    <Item>
      <LinkContainer to={path}>
        <Cover fluid={cover} />
        <InfoSection>
          <Title>{title}</Title>
          <Synopsis>{synopsis}</Synopsis>
          <IngredientsList ingredients={ingredients} />
        </InfoSection>
      </LinkContainer>
    </Item>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.shape({
    path: PropTypes.string.isRequired,
    cover: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired
  })
};

export default RecipeItem;

const List = styled.ul`
  display: flex;

  & > li {
    font-size: 0.95em;
    font-weight: 300;
    margin-right: 1em;
    color: #868e96;
    text-transform: capitalize;

    @media ${device.mobile} {
      font-size: 2.75vw;
    }
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
