import React from "react";
import { connect } from "react-redux";
import "./App.css";

function App(props) {
  const handleInc = (evt) => {
    props.dispatch({
      type: "INCREMENT",
    });
  };

  const handleDec = (evt) => {
    props.dispatch({
      type: "DECREMENT",
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img
          className="logo"
          src="https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png"
        />
        <h1 className="title">My first counter using Redux</h1>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
        <p>{props.count}</p>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(App);
