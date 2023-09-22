import { useState } from "react";
import "./textField.css";

interface TextFieldProps {
  label: string;
  type?: string;
  size?: "small" | "medium" | "large";
  required?: boolean;
  readOnly?: boolean;
  isDisabled?: boolean;
  border?: "squared" | "rounded";
  state?: "primary" | "link" | "info" | "success" | "warning" | "danger";
  iconLeft?: string;
  iconRight?: string;
  iconPosition?: "left" | "right";
  reactiveValue?: boolean;
  help?: string;
  placeHolder?: string;
  float?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  type,
  size,
  required,
  readOnly,
  isDisabled,
  border,
  state,
  iconLeft,
  iconRight,
  reactiveValue,
  help,
  float,
  placeHolder,
}) => {
  const [value, setValue] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  // fuction to get className for text field style

  const getClassName = () => {
    const className = ["input"];
    if (size) {
      className.push(size);
    }

    if (isDisabled) {
      className.push("isDisabled");
    }

    if (border) {
      className.push(border);
    }

    if (iconLeft) {
      className.push("inputPaddingIconLeft");
    }

    if (iconRight) {
      className.push("inputPaddingIconRight");
    }

    if (invalidInput) {
      className.push("invalidInput");
    }

    return className.join(" ");
  };

  // function to verificate email

  const validEmail = () => {
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value) == true
      ? setInvalidInput(false)
      : setInvalidInput(true);
  };

  // function to verificate if required field is blank
  const isBlank = () => {
    value === "" ? setInvalidInput(true) : setInvalidInput(false);
  };
  // function to verificate password
  const validPassword = () => {
    value.length < 1 ? setInvalidInput(true) : setInvalidInput(false);
  };

  // function for take value on key press and prevent invalid input in determinated type of component

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (required) {
        isBlank();
      }
      if (type === "password") {
        validPassword();
      }
      if (type === "email") {
        validEmail();
      }
    } else if (e.key === "Tab") {
      if (required) {
        isBlank();
      }
      if (type === "password") {
        validPassword();
      }
      if (type === "email") {
        validEmail();
      }
    }
  };

  // function to defined the placeHolder

  const getPlaceHolder = () => {
    float ? (placeHolder = label) : placeHolder;
    return placeHolder;
  };

  // function to disabled specific field

  const isDisabledFunction = () => {
    return isDisabled || readOnly ? true : false;
  };

  return (
    <div className="componetContainer">
      {!invalidInput ? (
        <label className="label" data-state={state}>
          {label}
        </label>
      ) : (
        <label className="labelInvalidInput" data-state={state}>
          {label}
        </label>
      )}

      <div className="form" data-state={size}>
        <form className="form-input">
          {iconLeft && (
            <span className="iconLeft" data-state={state}>
              <i className={iconLeft} id="icon" data-state={size}></i>
            </span>
          )}
          {iconRight && (
            <span className="iconRight" data-state={state}>
              <i className={iconRight} id="icon" data-state={size}></i>
            </span>
          )}
          <input
            type={type}
            className={getClassName()}
            disabled={isDisabledFunction()}
            data-state={state}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
            placeholder={getPlaceHolder()}
          />
        </form>

        {help && <p className="helper">{help}</p>}

        {invalidInput && <p className="helperInvalidInput">invalid input</p>}

        {reactiveValue && <p className="reactiveText">{value}</p>}
      </div>
    </div>
  );
};
export default TextField;
