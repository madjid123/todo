import React, { useState } from 'react';

export default function Task(props) {

    const [value, setvalue] = useState('')
    const handleChange = (e) => {
        e.preventDefault();
        setvalue(e.target.value)
    }
    const onsubmit = (e) => {
        e.preventDefault();
        console.log(value)
        props.addTask(value)
        setvalue('')


    }
    return (

        <form onSubmit={onsubmit}>
            <input type='text' onChange={handleChange} value={value}></input>

            <button >submit </button>
        </form>


    )

}
