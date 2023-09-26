import React from "react";
import "./App.css";
import TextField from "./components/textfield/TextField";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <h1>TEXTFIELD COMPONET</h1>

      <h3>SIZE</h3>
      <div className="container">
        <TextField label="Small" size="small" />
        <TextField label="Normal" />
        <TextField label="Medium" size="medium" />
        <TextField label="Large" size="large" />
      </div>

      <h3>ATTRIBUTES</h3>
      <div className="container">
        <TextField label="*Required" required />
        <TextField label="Readonly" readOnly placeHolder="readonly field" />
        <TextField label="Disabled" isDisabled />
      </div>
      <div className="container">
        <TextField label="Password" type="password" />
        <TextField label="Email" type="email" />
        <TextField
          label="Searchfield"
          type="search"
          placeHolder="search on Google"
        />
        <TextField label="Helper Text" help="some helper text" />
      </div>

      <h3>COLOR STATES</h3>
      <div className="container">
        <TextField label="Normal" />
        <TextField label="Primary" state="primary" />
        <TextField label="Link" state="link" />
        <TextField label="Info" state="info" />
      </div>
      <div className="container">
        <TextField label="Success" state="success" />
        <TextField label="Warning" state="warning" />
        <TextField label="Danger" state="danger" />
      </div>

      <h3>BORDERS</h3>
      <div className="container">
        <TextField label="Normal" />
        <TextField label="Squared" border="squared" />
        <TextField label="Rounded" border="rounded" />
      </div>

      <h3>ICONS</h3>
      <div className="container">
        <TextField label="Left Icon" iconLeft="fa-regular fa-envelope" />
        <TextField label="Right Icon" iconRight="fa-regular fa-eye" />
        <TextField
          label="Left and Right Icon"
          iconLeft="fa-regular fa-envelope"
          iconRight="fa-solid fa-check"
        />
      </div>
      <div className="container">
        <TextField
          label="Primary Icon"
          iconLeft="fa-regular fa-envelope"
          iconRight="fa-regular fa-eye"
          state="primary"
        />
        <TextField
          label="Link Icon"
          iconLeft="fa-regular fa-envelope"
          iconRight="fa-regular fa-eye"
          state="link"
        />
        <TextField
          label="Info Icon"
          iconLeft="fa-regular fa-envelope"
          iconRight="fa-regular fa-eye"
          state="info"
        />
      </div>
      <div className="container">
        <TextField
          label="Success Icon"
          iconLeft="fa-regular fa-envelope"
          iconRight="fa-regular fa-eye"
          state="success"
        />
        <TextField
          label="Warning Icon"
          iconLeft="fa-regular fa-envelope"
          iconRight="fa-regular fa-eye"
          state="warning"
        />
        <TextField
          label="Danger Icon"
          iconLeft="fa-regular fa-envelope"
          iconRight="fa-regular fa-eye"
          state="danger"
        />
      </div>
      <div className="container">
        <TextField
          label="Small Icon"
          iconLeft="fa-regular fa-envelope"
          iconRight="fa-regular fa-envelope"
          size="small"
        />
        <TextField
          label="Medium Icon"
          iconLeft="fa-regular fa-envelope"
          iconRight="fa-regular fa-envelope"
          size="medium"
        />
        <TextField
          label="Large Icon"
          iconLeft="fa-regular fa-envelope"
          iconRight="fa-regular fa-envelope"
          size="large"
        />
      </div>

      <h3>INPUT VALUE</h3>
      <div className="container">
        <TextField
          label="Reactive value"
          reactiveValue
          placeHolder="write something"
        />
      </div>

      <h3>FLOATING LABEL</h3>
      <div className="container">
        <TextField label="Floating" float />
      </div>
    </div>
  );
};

export default App;
