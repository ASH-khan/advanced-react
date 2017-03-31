import React, { Component } from 'react';
import { Logo, Name, SwitchApps, Login } from '../../components/common';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Name />
        <SwitchApps />
        <Login />
      </div>
    );
  }
}
