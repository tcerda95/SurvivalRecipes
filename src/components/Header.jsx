import PropTypes from 'prop-types';
import React from 'react';
import { Link } from '../i18n';
import styled from 'styled-components';

const Tab = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const Container = styled.div`
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

const Header = ({ siteTitle }) => (
  <Tab>
    <Container>
      <Title>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </Title>
    </Container>
  </Tab>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ''
};

export default Header;
