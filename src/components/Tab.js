import React from 'react';
/*import './Tab.css';*/
import {Tabs} from 'react-materialize';

function TabLogin (props){
    return (
        <Tabs>
        <div className = "tab-demo z-depth-1" options={{swipeable: true}}>
        <input type="radio" class="tab" id={props.id} defaultChecked={props.checked} className="active" name="tabs"/> 
        <label htmlFor={props.id} className="tab_label">
            {props.text}
        </label>
        <div className={props.classNameContent}>
                {props.children}
        </div>
        </div>
        </Tabs>
    );
}

export default TabLogin;
