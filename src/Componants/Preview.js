import React from "react";

const Preview = ({ frstname, lastName, gmail, password }) => {
  return (
    <div>
      <div>
        <label>Frst Name:</label>
        {frstname}
      </div>
      <div>
        <label>last Name:</label>
        {lastName}
      </div>
      <div>
        <label>Gmail:</label>
        {gmail}
      </div>
      <div>
        <label>password:</label>
        {password}
      </div>
    </div>
  );
};

export default Preview;
