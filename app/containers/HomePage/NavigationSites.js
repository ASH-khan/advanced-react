import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-right: 50px;
`;

// eslint-disable-line react/prefer-stateless-function
class NavigationSites extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <div className="btn-group">
          <button type="button" className="btn btn-default">Select Site</button>
          <button type="button" data-toggle="dropdown" className="btn btn-default dropdown-toggle"><span className="caret"></span></button>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>
      </Wrapper>
    );
  }
}

export default NavigationSites;
