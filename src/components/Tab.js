import React from 'react';
import './Tab.css';

function TabLogin (props){
    return (
        <div>
        <input type="radio" id={props.id} defaultChecked={props.checked} className="input_tab" name="tabs"/> 
        <label htmlFor={props.id} className="tab_label">
            {props.text}
        </label>
        <div className={props.classNameContent}>
                {props.children}
              </div>
        </div>
    );
}

export default TabLogin;