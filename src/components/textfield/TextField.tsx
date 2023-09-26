import { useState } from "react";
import "./textField.css";

interface TextFieldProps {
  label?: string;
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
  const [dirty, setDirty] = useState(false);
  const [helpMessage, setHelpMessage] = useState("");

  // function to get className for label style

  const getLabelClassName = () => {
    const labelClassName = ["label"];

    if (float && !dirty) {
      labelClassName.push("floatingLabel");
    }

    if (invalidInput) {
      labelClassName.push("labelInvalidInput");
    }

    return labelClassName.join(" ");
  };

  // function to get className for input style

  const getInputClassName = () => {
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

    if (iconLeft && size) {
      if (size === "small") {
        className.push("inputPaddingIconLeftSmall");
      }
      if (size === "medium") {
        className.push("inputPaddingIconLeftMedium");
      }
      if (size === "large") {
        className.push("inputPaddingIconLeftLarge");
      }
    }

    if (iconRight) {
      className.push("inputPaddingIconRight");
    }

    if (iconRight && size) {
      if (size === "small") {
        className.push("inputPaddingIconRightSmall");
      }
      if (size === "medium") {
        className.push("inputPaddingIconRightMedium");
      }
      if (size === "large") {
        className.push("inputPaddingIconRightLarge");
      }
    }

    if (invalidInput) {
      className.push("invalidInput");
    }

    return className.join(" ");
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.currentTarget.value;
    setValue(currentValue);
    if (currentValue != "") {
      setDirty(true);
    } else {
      setDirty(false);
    }
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
    /^(?=.*[0-9])[a-zA-Z0-9]{8,999}$/.test(value) == true
      ? setInvalidInput(false)
      : setInvalidInput(true);
  };

  // function search

  const searchOnGoogle = () => {
    if (value.trim() !== "") {
      window.open(`https://www.google.com/search?q=${value}`, "_blank");
    }
  };

  // function for take value on key press and prevent invalid input in determinated type of component

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (required) {
        isBlank();
        setHelpMessage("required field");
      }
      if (type === "password") {
        validPassword();
        setHelpMessage(
          "Password must contain:\n- one number\n- one uppercase letter\n- one lowercase letter\n- at least 8 or more characters"
        );
      }
      if (type === "email") {
        validEmail();
        setHelpMessage("insert a valid e-mail\ne.g. email@example.com");
      }
      if (type === "search") {
        searchOnGoogle();
      }
    } else if (e.key === "Tab") {
      if (required) {
        isBlank();
        setHelpMessage("required field");
      }
      if (type === "password") {
        validPassword();
        setHelpMessage(
          "Password must contain:\n- one number\n- one uppercase letter\n- one lowercase letter\n- at least 8 or more characters"
        );
      }
      if (type === "email") {
        validEmail();
        setHelpMessage("insert a valid e-mail\ne.g. email@example.com");
      }
    }
  };

  // function to disabled specific field

  const isInputDisabledOrReadOnly = () => {
    return isDisabled || readOnly ? true : false;
  };

  return (
    <div className="componetContainer">
      <label className={getLabelClassName()} data-state={state}>
        {label}
      </label>

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
            className={getInputClassName()}
            disabled={isInputDisabledOrReadOnly()}
            data-state={state}
            onChange={(e) => onChangeHandler(e)}
            onKeyDown={(e) => handleKeyDown(e)}
            placeholder={placeHolder}
            required={required}
          />
        </form>

        {help && (
          <p className="helper" style={{ whiteSpace: "pre-line" }}>
            {help}
          </p>
        )}

        {invalidInput && (
          <p className="helperInvalidInput" style={{ whiteSpace: "pre-line" }}>
            {helpMessage}
          </p>
        )}

        {reactiveValue && <p className="reactiveText">{value}</p>}
      </div>
    </div>
  );
};
export default TextField;
