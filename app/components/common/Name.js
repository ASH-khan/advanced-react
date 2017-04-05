import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: .67em 0;
  font-size: 1.5em;
  flex: 2 0px;
  text-align: center;
`;

const AppName = styled.h3`
  margin-top: 15px;
`;

class Name extends Component {
  render() {
    return (
      <Wrapper>
        <AppName>Planner</AppName>
      </Wrapper>
    );
  }
}
export { Name };
