import React from 'react';
import PropTypes from 'prop-types';

const InputField = props =>
  <div className={`field ${!!props.error ? 'error' : ''}`}>
      {props.labelShown !== false &&
        <label htmlFor={props.id}>
          {props.label}
        </label>
      }
      <input
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        className={props.className || ""}
        placeholder={props.placeholder}
        min={(props.type === 'number' && props.minValue) ? `${props.minValue}` : null}
        max={(props.type === 'number' && props.maxValue) ? `${props.maxValue}` : null}
      />
    {props.children && props.children}
  </div>;

InputField.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  id: PropTypes.string
};

export default InputField;