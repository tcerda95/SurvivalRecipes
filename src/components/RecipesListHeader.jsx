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

const Form = styled.form`
  width: 30%;

  @media ${device.mobile} {
    width: 35%;
  }
`;

const Search = styled.input`
  height: 100%;
  width: 100%;
  background-color: #d7d7d7;
  color: #868e96;
  border-radius: 8px;
  text-align: center;
  font-size: 1.1em;
  font-weight: 300;
  -webkit-appearance: none;

  @media ${device.mobile} {
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
      <Form action="." onSubmit={e => e.preventDefault()}>
        <Search
          type="search"
          onChange={e => onChange(e.target.value)}
          onFocus={e => e.target.setSelectionRange(0, e.target.value.length)}
          onKeyPress={e => e.key === 'Enter' && e.target.blur()}
          value={value}
          placeholder={placeholder}
        />
      </Form>
    </Container>
  );
};

RecipesListHeader.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default RecipesListHeader;
