import React from 'react'
import style from './CardProject.module.css'
import { Link } from 'react-router-dom'
import { ImCross } from 'react-icons/im'
import { deleteProject } from '../../../../redux/features/user/userSlice'
import { useDispatch } from 'react-redux'
import Color from '../../../functions/color'

export default function CardProject({ id, name, description, priority }) {

    let color = Color(priority);

    let border = {
        borderTop: `5px solid ${color}`
    }

    let background = {
        backgroundColor: `${color}`,
        padding: "5px 10px"
    }

    let dispatch = useDispatch()

    return (
        <div className={style.Container} style={border}>
            <div className={style.Container_Div}>
                <p className={style.Container_Priority} style={background}><b>{priority}</b></p>
                <ImCross className={style.Container_Cross} onClick={() => dispatch(deleteProject(id))} />
            </div>
            <p className={style.Container_Name}>{name}</p>
            <p className={style.Container_Description}>{description}</p>
            <Link className={style.ContianerLink} to={`/project/${id}`}>Show Tasks</Link>
        </div>
    )
}
