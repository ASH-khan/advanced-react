 import React, { Component } from 'react';
 import styled from 'styled-components';
 import MenuIcon from '-!babel-loader!svg-react-loader!../../images/menu.svg';

 const Wrapper = styled.div`
  margin: .67em 0;
  font-size: 2em;
  flex: 1 -50px;
  text-align: right;
`;

class SwitchApps extends Component {
  render() {
    return (
      <Wrapper>
        <div className="dropdown">
          <span className=" dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <MenuIcon />
          </span>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li role="presentation"><a href="http://stackoverflow.com/" role="menuitem" target="_blank">Action</a></li>
            <li role="presentation"><a href="#" role="menuitem" target="_blank">Another action</a></li>
            <li role="presentation"><a href="#" role="menuitem" target="_blank">Something else here</a></li>
            <li role="presentation"><a href="#" role="menuitem" target="_blank">Something else here</a></li>
          </ul>
        </div>
      </Wrapper>
    );
  }
}
export { SwitchApps };
