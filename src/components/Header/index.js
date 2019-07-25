import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <h1 className="title">Which Waldo</h1>
          <hr></hr>
          <p className="instructions text-center">Click an image to watch your score increase, but make sure you don't click the same image twice! Click all for a Victory!</p>
          {props.children}
    </div>
  )
}

export default Header;
