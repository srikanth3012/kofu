import React, { useState } from "react";
import Preview from "./Preview";

export const Form = () => {
  const [frstname, setFrstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState();
  const [step2, setStep2] = useState(false);
  const [preview, setPreview] = useState(false);
  const inputHandler = (field, setState, value) => {
    setState(value);
    if (field === "gmail") {
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(field);
    } else if (field === "password") {
      /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?"]).*$/.text(field);
    }
  };
  const setpHandler = () => {
    setStep2(!step2);
  };
  const displayData = () => {
    setPreview(true);
    // console.log(frstname);
    // console.log(lastName);
    // console.log(gmail);
    // console.log(password);
  };
  return (
    <div>
      {!step2 ? (
        <div>
          <label>First Name:</label>
          <input
            type="text"
            placeholder="name"
            value={frstname}
            onChange={(e) => inputHandler(setFrstName, e.target.value)}
          />
          <br />
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => inputHandler(setLastName, e.target.value)}
          />
          <br />
          <button onClick={setpHandler}>Next</button>
        </div>
      ) : (
        <div>
          <label>Gmail:</label>
          <input
            type="text"
            placeholder="Gmail"
            value={gmail}
            onChange={(e) => inputHandler(gmail, setGmail, e.target.value)}
          />
          <br />
          <label>Password:</label>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              inputHandler(password, setPassword, e.target.value)
            }
          />
          <br />
          <button onClick={setpHandler}>Previous</button>
          <button
            onClick={displayData}
            disabled={!frstname && !lastName && !gmail && !password}
          >
            Submit
          </button>
        </div>
      )}
      {preview && (
        <Preview
          frstname={frstname}
          lastName={lastName}
          gmail={gmail}
          password={password}
        />
      )}
    </div>
  );
};
