import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: .67em 0;
  font-size: 2em;
  flex: 1 0px;
  text-align: right;
`;

class Login extends Component {
  render() {
    return (
      <Wrapper>
        <button className='btn btn-primary'>Login</button>
      </Wrapper>
    );
  }
}
export { Login };
