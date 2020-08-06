import React from "react"

export default function Todo(props) {

    return (
        <div>
            <input type='checkbox'></input>
            <a> {props.name} </a>
            <button onClick={() => { props.DeleteTask(props.name); }}> Delete</button>
            <br></br>
        </div>
    );
}
