import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: .67em 0;
  font-size: 2em;
  flex: 1 0px;
`;

const AppLogo = styled.p`
`;

class Logo extends Component {
  render() {
    return (
      <Wrapper>
        <AppLogo>Xenio</AppLogo>
      </Wrapper>
    );
  }
}
export { Logo };
