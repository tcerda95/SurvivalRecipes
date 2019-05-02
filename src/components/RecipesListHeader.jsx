import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { IntlContext } from '../i18n';
import device from './device';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3em 0;
`;

const Search = styled.input`
  width: 30%;
  background-color: #d7d7d7;
  color: #868e96;
  border-radius: 8px;
  text-align: center;
  font-size: 1.1em;
  font-weight: 300;

  @media ${device.mobile} {
    width: 35%;
    font-size: 3.5vw;
  }
`;

const Text = styled.h3`
  width: 60%;
  font-size: 1.4em;
  font-weight: 300;
  margin: 0;

  @media ${device.mobile} {
    width: 55%;
    font-size: 4.25vw;
  }
`;

const RecipesListHeader = ({ onChange, value = '' }) => {
  const { formatMessage } = useContext(IntlContext);
  const placeholder = formatMessage({ id: 'searchPlaceholder' });

  return (
    <Container>
      <Text>
        <FormattedMessage id="recipeListHeaderText" />
      </Text>
      <Search
        type="text"
        onChange={e => onChange(e.target.value)}
        value={value}
        placeholder={placeholder}
      />
    </Container>
  );
};

RecipesListHeader.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default RecipesListHeader;
