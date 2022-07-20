import React from 'react'
import style from './ListProjects.module.css'
import CardProject from '../../ProjectsAndTask/Project/CardProject/CardProject.js'
import { useSelector } from 'react-redux'


export default function ListProjects() {

    let projects = useSelector(state => state.user.projects);

    return (
        <div className={style.Container}>
            {projects.map(p => {
                return (
                    <CardProject
                        name={p.name}
                        description={p.description}
                        priority={p.priority}
                        id={p.id}
                        key={p.id}
                    />
                )
            })
            }
        </div>
    )
}
