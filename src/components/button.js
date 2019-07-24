import React from 'react';
import button from '../components/button.css';

function Button(props){
	return (
		<button className="button" onClick={props.onClick}>
			{props.text}
		</button>
	);
}

export default Button;  