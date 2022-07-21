import React from 'react'
import { Link } from 'react-router-dom'
import style from './RenderNoLogged.module.css'

export default function RenderNoLogged() {
    return (
        <div className={style.Container__Alert}>
            <h3 className={style.Container__Alert_h3}>In Project-App you can write down your projects and the tasks of each project to keep track of each one</h3>
            <p className={style.Container__Alert_p}>
                <Link to='/signup' className={style.Container__Alert_p_Link}> Register </Link> or
                <Link to='/signin' className={style.Container__Alert_p_Link}> login </Link>
                to view or upload projects
            </p>
            <p className={style.Container__Alert_p}>This project was made with the following technologies: ReactJS, ReduxJS, NodeJS, Express, Sequelize. and for the database PostgreSQL is used. For the security of each account, modules such as Bcrypt and JWT are used.
            </p>
        </div>
    )
}
