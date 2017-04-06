import React, { Component } from 'react';
import styled from 'styled-components';
import { Logo, Name, SwitchApps } from '../../components/common';
import Login from './Login.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  padding: 0 50px 0 50px;
  margin-top: 40px;
  
`;


export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Logo />
        <Name />
        <SwitchApps />
        <Login />
      </Wrapper>
    );
  }
}
