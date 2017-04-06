import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import _ from 'lodash';
import styled from 'styled-components';
import { loginUser } from './actions/index';

const Wrapper = styled.div`
  margin: .67em 0;
  font-size: 2em;
  flex: 1 0px;
  text-align: right;
`;
const FIELDS = {
  username: {
    type: 'input',
    label: 'username',
  },
  password: {
    type: 'input',
    label: 'password',
  },
}
class Login extends Component {
  componentWillMount() {
    console.log('reducer----\n', this.props);
  }
  onSubmit(props) {
   console.log('propsredux----\n', this.props); 
  }
  render() {
    const { handleSubmit, fields: { username, password } } = this.props;
    return (
      <Wrapper>
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Login</h4>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                  <div>
                    <label>Username</label>
                    <input type="text" className="form-control"  {...username}/>
                    
                  </div>
                  <div>
                    <label>Password</label>
                    <input type="text" className="form-control"  {...password}/>
                    
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <button type='button' className='btn btn-primary' data-toggle='modal' data-target='#myModal'>Login</button>
      </Wrapper>
    );
  }
}
const validate = (values) => {
  const errors = {};
  _.each(FIELDS, (type, field) => {
    if(!values[field]) {
      errors[field] = `Eneter a ${field}`;
    }
  });
  return errors;
}
const mapStateToProps = (state) => {
  console.log('prop state----\n', state);
  return state;
}
export default reduxForm({
  form: 'LoginForm',
  fields: _.keys(FIELDS),
  validate,
}, mapStateToProps, { loginUser })(Login);
