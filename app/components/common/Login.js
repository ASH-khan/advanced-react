import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: .67em 0;
  font-size: 2em;
  flex: 1 0px;
  text-align: right;
`;

const LoginButton = styled.button`
   margin-bottom: 4px;
`

class Login extends Component {
  render() {
    return (
      <Wrapper>
        <LoginButton className='btn btn-primary'>Login</LoginButton>
      </Wrapper>
    );
  }
}
export { Login };
