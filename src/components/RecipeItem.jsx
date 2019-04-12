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

const FlexLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const Cover = styled(Img)`
  flex: 1;
`;

const InfoSection = styled.div`
  flex: 3;
  padding: 0 1em;
`;

const Title = styled.h3`
  font-size: 1.8em;

  @media ${device.tablet} {
    font-size: 1.2em;
  }

  @media ${device.mobile} {
    font-size: 0.8em;
  }

  font-weight: 400;
  margin: 0;
`;

const Synopsis = styled.p`
  font-size: 1.1em;

  @media ${device.tablet} {
    font-size: 1em;
  }

  @media ${device.mobile} {
    font-size: 0.5em;
  }
  font-weight: 300;
`;

const RecipeItem = ({ recipe }) => {
  const { title, synopsis, ingredients } = recipe;

  return (
    <Item>
      <FlexLink to={recipe.path}>
        <Cover fluid={recipe.cover} />
        <InfoSection>
          <Title>{title}</Title>
          <Synopsis>{synopsis}</Synopsis>
          <IngredientsList ingredients={ingredients} />
        </InfoSection>
      </FlexLink>
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
    font-size: 0.95em;

    @media ${device.tablet} {
      font-size: 0.8em;
    }

    @media ${device.mobile} {
      font-size: 0.45em;
    }

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
