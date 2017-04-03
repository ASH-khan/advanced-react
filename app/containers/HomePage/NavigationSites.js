import React from 'react';
import styled from 'styled-components';

/* eslint no-console: 0 */
import Select, { Option } from 'rc-select';
import 'rc-select/assets/index.css';

const Wrapper = styled.div`
  margin-right: 50px;
  margin-bottom: 20px;
`;

// eslint-disable-line react/prefer-stateless-function
const NavigationSites = React.createClass({
  getInitialState() {
    return {
      places : ['Site1', 'Site2', 'Site3', 'Site4', 'Site5', 'Site6', 'Site7'],
      value : 'Select your Site',
    };
  },

  onInputChange (event) {
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

  onBlur (v) {
    console.log('onBlur', v);
  },

  onFocus () {
    console.log('onFocus');
  },

  getPlaces () {
      let places = this.state.places;
      places = places.map((i) => {
      return <Option key={i} text={String(i)}>{i}</Option>
    })
    return places;
  },

  render() {

    return (
        <Wrapper>
            <Select
              value={this.state.value}
              placeholder="Select Your Site"
              dropdownMenuStyle={{ maxHeight: 200, overflow: 'auto' }}
              style = {{ width: 250}}
              onBlur={this.onBlur}
              onFocus={this.onFocus}
              allowClear
              optionLabelProp="children"
              optionFilterProp="text"
              onChange={this.onInputChange}
            >
              {this.getPlaces()}
            </Select>

        </Wrapper>
    );
  },
});

export default NavigationSites;
