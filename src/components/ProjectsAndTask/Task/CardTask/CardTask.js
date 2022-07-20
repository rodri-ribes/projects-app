import React from 'react'
import style from './CardTask.module.css'
import { FiCheckCircle, FiCircle } from 'react-icons/fi'
import { ImCross } from 'react-icons/im'
import { useDispatch } from 'react-redux'
import { deleteTask, updateStateTask } from '../../../../redux/features/user/userSlice'


export default function CardTask({ id, name, description, done }) {

    let dispatch = useDispatch()

    return (
        <div className={style.Container}>
            <div className={style.ContainerDatos}>
                <p className={style.ContainerDatos_Name}>{name}</p>
                <p className={style.ContainerDatos_Description}>{description}</p>
                <p className={`${style.ContainerDatos_State} ${done ? style.ContainerDatos_State_Completed : ""}`}><b>State: </b>{done ? "Filled" : "Not completed"}</p>
            </div>
            <div className={style.ContainerState}>
                <div className={style.ContainerState_Check}>
                    {done ? <FiCheckCircle onClick={() => dispatch(updateStateTask(id, done))} /> : <FiCircle onClick={() => dispatch(updateStateTask(id, done))} />}
                </div>
                <div className={style.ContainerState_Cross} >
                    <ImCross onClick={() => dispatch(deleteTask(id))} />
                </div>
            </div>
        </div>
    )
}
