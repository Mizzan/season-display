import React from "react";
import ReactDOM from "react-dom";

function getTime() {
  return new Date().toLocaleTimeString();
}

const App = () => {
  const buttonStyle = {
    color: "#fff",
    backgroundColor: "blue",
    border: "none",
    padding: "10px",
    borderRadius: "20px",
  };
  return (
    <div>
      <label htmlFor="username">Enter Name :</label>
      <input type="text" name="username" id="username" />
      <button style={buttonStyle}>Submit</button>
      <h3>Current Time</h3>
      <h1>{getTime()}</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
