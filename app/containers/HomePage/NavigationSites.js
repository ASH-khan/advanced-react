import React from 'react';
import styled from 'styled-components';

/* eslint no-console: 0 */
import Select, { Option } from 'rc-select';
import 'rc-select/assets/index.css';

const Wrapper = styled.div`
  margin-right: 50px;
`;

// eslint-disable-line react/prefer-stateless-function
const NavigationSites = React.createClass({
  getInitialState() {
    return {
      value: 'Select your Site',
    };
  },

  onChange(e) {
    let value;
    if (e && e.target) {
      value = e.target.value;
    } else {
      value = e;
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
              onChange={this.onChange}
            >
              {['Site1', 'Site2', 'Site3', 'Site4', 'Site5', 'Site6', 'Site7'].map((i) => {
                return <Option key={i} text={String(i)}>{i}</Option>;
              })}
            </Select>

        </Wrapper>
    );
  },
});

export default NavigationSites;
