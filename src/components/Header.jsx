import PropTypes from 'prop-types';
import React from 'react';
import { Link } from '../i18n';
import styled from 'styled-components';

import Themer from './Themer';

const Tab = styled.div`
  background: ${props => props.theme.primary};
  margin-bottom: 1.45rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 800px;
  padding: 1.45rem 1.0875rem;
`;

const Title = styled.h1`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: white;
`;

const Header = ({ siteTitle, onThemeChange }) => (
  <Tab>
    <Container>
      <Title>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </Title>
      <input type="checkbox" name="theme" checked={Themer.isDark()} onChange={onThemeChange} />
    </Container>
  </Tab>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  onThemeChange: PropTypes.func.isRequired
};

Header.defaultProps = {
  siteTitle: ''
};

export default Header;
