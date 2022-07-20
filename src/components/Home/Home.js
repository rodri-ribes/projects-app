import React from 'react'
import { useSelector } from 'react-redux';
// import { getProjects, getUser } from '../../redux/features/user/userSlice';
import style from './Home.module.css';

/**COMPONENTES */
import RenderLogged from './RenderLogged/RenderLogged.js'
import RenderNoLogged from './RenderNoLogged/RenderNoLogged.js'


export default function Home() {

    let user = useSelector(state => state.user.user)
    // let dispatch = useDispatch()



    // useEffect(() => {
    //     dispatch(getUser(JSON.parse(window.localStorage.getItem("user"))))
    // }, [dispatch])

    // useEffect(() => {
    //     dispatch(getProjects())
    // }, [dispatch])


    return (
        <div className={style.Container}>
            {user ? <RenderLogged />
                : <RenderNoLogged />
            }
        </div>
    )
}
