import React from 'react';
import NavigationSites from './NavigationSites';
import NavigationFloors from './NavigationFloors';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  align-items: stretch;
  padding: 0 50px 0 50px;
  margin-top: 40px;
`;

const Navigation = () => {
  return (
    <Wrapper>
      <NavigationSites />
      <NavigationFloors />
    </Wrapper>
  );
}

export default Navigation;
