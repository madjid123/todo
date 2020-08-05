import React, { useState } from 'react';
import PropTypes from "prop-types"
export default function Task(props) {
    const [Value, setValue] = useState('gfdsgf')
    const onsubmit = (e) => {
        e.preventDefault();
        setValue(value)
        props.addTask(value)

    }
    var value;
    return (
        <form onSubmit={onsubmit}>
            <input type='text' ref={input => { value = input; console.log({ input }) }}></input>

            <button >submit </button>
        </form>



    )

}
Task.propTypes = {
    Value: PropTypes.string.isRequired
}
