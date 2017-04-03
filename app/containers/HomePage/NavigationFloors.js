import React from 'react';
import styled from 'styled-components';

/* eslint no-console: 0 */
import Select, { Option } from 'rc-select';
import 'rc-select/assets/index.css';

const Wrapper = styled.div`
  margin-right: 50px;
`;

// eslint-disable-line react/prefer-stateless-function
const NavigationFloors = React.createClass({
  getInitialState() {
    return {
      floors : ['Floor1', 'Floor2', 'Floor3', 'Floor4', 'Floor5', 'Floor6', 'Floor7'],
      value: 'Select your Floor',
    };
  },

  onInputChange(event) {
    let value;
    if (event && event.target) {
      value = event.target.value;
    } else {
      value = event;
    }
    console.log('onChange', value);

    this.setState({
      value,
    });
  },

  onBlur(v) {
    console.log('onBlur', v);
  },

  onFocus() {
    console.log('onFocus');
  },

  getFloors () {
    let floors = this.state.floors;
    floors = floors.map((i) => {
      return <Option key={i} text={String(i)}>{i}</Option>;
    })
    return floors;
  },

  render() {

    return (

        <Wrapper>
          <Select
            value={this.state.value}
            placeholder="Select Your Floor"
            dropdownMenuStyle={{ maxHeight: 200, overflow: 'auto' }}
            style={{ width: 250 }}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            allowClear
            optionLabelProp="children"
            optionFilterProp="text"
            onChange={this.onInputChange}
          >
            {this.getFloors()}
          </Select>
        </Wrapper>
    );
  },
});

export default NavigationFloors;
