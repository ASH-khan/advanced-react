import React, { Component } from 'react';
import styled from 'styled-components';
import BrandingLogo from '-!babel-loader!svg-react-loader!../../images/logo.svg';

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
        <BrandingLogo />
      </Wrapper>
    );
  }
}
export { Logo };
