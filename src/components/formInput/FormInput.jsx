import React, { useState } from "react";
import "./FormInput.css"
import { FormGroup, Input, InputGroup, InputGroupText } from "reactstrap";

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

  return (
      <div className="formInput">
      <label>{label}</label>
      <FormGroup>
        <InputGroup className="input-group-alternative mb-3">
          <input
           {...inputProps}
           onChange={onChange}
           onBlur={handleFocus}
           className="form-control"
           onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
           focused={focused.toString()} />
        </InputGroup>
      </FormGroup>
    <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput