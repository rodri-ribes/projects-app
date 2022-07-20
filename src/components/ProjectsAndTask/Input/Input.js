import React from 'react'
import style from "./Input.module.css"

export default function Input({ state, setDatos, name, type, placeholder, value }) {

    const onChange = (e) => {
        setDatos({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className={style.Container}>
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} />
        </div>
    )
}
