import React from 'react';
import './Button.css';


function Button(props) {
  return (
    <button className={props.className} id={props.id} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;