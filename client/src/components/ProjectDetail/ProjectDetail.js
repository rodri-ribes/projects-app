import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './ProjectDetail.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProject, getTasks } from '../../redux/features/user/userSlice'
import Color from '../functions/color'
import AddTask from '../ProjectsAndTask/Task/AddTask/AddTask.js'
import ModyTask from '../ProjectsAndTask/Task/ModyTask/ModyTask.js'
import CardTask from '../ProjectsAndTask/Task/CardTask/CardTask.js'

export default function ProjectDetail() {

    const { id } = useParams()

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTasks(id))
        dispatch(getProject(id))
    }, [dispatch, id])


    let tasks = useSelector(state => state.user.tasks)
    let project = useSelector(state => state.user.project)

    useEffect(() => {
        dispatch(getTasks(id))
    }, [tasks, dispatch, id])


    let color = Color(project.priority);

    let border = {
        borderTop: `5px solid ${color}`
    }

    let background = {
        backgroundColor: `${color}`,
        padding: "5px 10px"
    }

    const [addMody, setaddMody] = useState(true)

    return (
        <div className={style.Container}>
            <div className={style.ContainerPanel}>
                <div className={style.ContainerPanelBtns}>
                    <button onClick={() => setaddMody(true)}>Add Task</button>
                    <button onClick={() => setaddMody(false)}>Modify Task</button>
                </div>
                {addMody ?
                    <AddTask idProject={id} />
                    :
                    <ModyTask idProject={id} />
                }
            </div>
            <div className={style.Container_Tasks}>
                <div className={style.ContainerProject} style={border}>
                    <p className={style.ContainerProject_Priority} style={background}><b>{project.priority}</b></p>
                    <p className={style.ContainerProject_Name}>{project.name}</p>
                    <p className={style.ContainerProject_Description}>{project.description}</p>
                </div>
                {tasks ?
                    tasks.map(t => {
                        return (
                            <CardTask
                                name={t.name}
                                description={t.description}
                                done={t.done}
                                id={t.id}
                                key={t.id}
                            />
                        )
                    })
                    : null
                }
            </div>
        </div>
    )
}
