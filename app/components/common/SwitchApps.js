 import React, { Component } from 'react';
 import styled from 'styled-components';

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
            <i className="fa fa-bars" aria-hidden="true"></i>
          </span>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li role="presentation"><a href="#" role="menuitem">Action</a></li>
            <li role="presentation"><a href="#" role="menuitem">Another action</a></li>
            <li role="presentation"><a href="#" role="menuitem">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li role="presentation"><a href="#">Separated link</a></li>
          </ul>
        </div>
      </Wrapper>
    );
  }
}
export { SwitchApps };
