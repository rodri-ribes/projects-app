import React, { useEffect, useState } from 'react'
import style from './RenderLogged.module.css'


/**COMPONENTES */

import AddProject from '../../ProjectsAndTask/Project/AddProject/AddProject.js'
import ModyProject from '../../ProjectsAndTask/Project/ModyProject/ModyProject.js'
import ListProjects from '../ListProjects/ListProjects'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects, getUser } from '../../../redux/features/user/userSlice'


export default function RenderLogged() {

    const [addMody, setaddMody] = useState(true);

    let user = useSelector(state => state.user.user);

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser(JSON.parse(window.localStorage.getItem("user"))))
    }, [dispatch])

    useEffect(() => {
        dispatch(getProjects())
    }, [dispatch])

    return (
        <div className={style.Container}>
            <h1 className={style.Container_Welcome}>Welcome {user.name}, do you have many projects to write down today? </h1>
            <div className={style.ContainerPenlProjects}>
                <div className={style.ContainerPanel}>
                    <div className={style.ContainerPanelBtns}>
                        <button onClick={() => setaddMody(true)}>Add Project</button>
                        <button onClick={() => setaddMody(false)}>Modify Project</button>
                    </div>
                    {addMody ? <AddProject />
                        : <ModyProject />
                    }
                </div>
                <div className={style.ContainerProjects}>
                    <ListProjects />
                </div>
            </div>
        </div>
    )
}
