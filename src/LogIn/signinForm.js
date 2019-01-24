import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "semantic-ui-react";
import InputField from "./inputfield";
import PasswordInputField from "./passwordInputField";

const SigninForm = ({ data, errors, onSubmit, successMessage, onChange }) => (
  <Form onSubmit={onSubmit}>
    {successMessage && <p className="success-message">{successMessage}</p>}
    {errors.email && <p className="error-message">{errors.email}</p>}
    {errors.password && <p className="error-message">{errors.password}</p>}

    <InputField
      type="text"
      label="Email ID"
      name="email"
      placeholder="Email"
      className="form-control"
      value={data.email || ""}
      onChange={onChange}
    />
    <div>
      <PasswordInputField
        password={data.password || ""}
        onChange={onChange}
        error={errors.password ? "password_error" : null}
      />
    </div>
    <Button type="submit">Signin</Button>
  </Form>
);

SigninForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default SigninForm;
