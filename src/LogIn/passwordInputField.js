import React from 'react';
import PropTypes from 'prop-types';
import InputField from './inputfield';

class PasswordInputField extends React.Component {
  state = {
    showPassword: false
  };

  handlePasswordChecked = () => this.setState({ showPassword: !this.state.showPassword });

  render() {
    const { showPassword } = this.state;
    return (
      <div>
        <InputField
          type={!showPassword ? 'password' : 'text'}
          name={this.props.name}
          labelShown={this.props.labelShown}
          value={this.props.password}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder || "Password"}
          {...this.props}
        />
        <span onClick={this.handlePasswordChecked}>
        </span>
      </div>
    );
  }
}

PasswordInputField.propTypes = {
  password: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
PasswordInputField.defaultProps = {
  name: "password",
  label: "Password"
};

export default PasswordInputField;