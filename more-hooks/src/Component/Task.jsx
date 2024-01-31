// eslint-disable-next-line no-unused-vars
import React from "react";
import './Todo.css';

const Task = (props)=>{
    // eslint-disable-next-line react/prop-types
    const {task, index,dispatch}=
 props;
    // eslint-disable-next-line react/prop-types
    const {text,isHidden} = task;
    return(
        <div className="task-container">
            {
                isHidden?<h3>This content is hidden</h3>:
                <h3>Task:{text}</h3>   
            }
            <button className="toggle-button"onClick={()=>dispatch({type:"TOGGLE_TEXT",payload:index})}>Toggle</button>
        </div>
    )

}
export default Task;