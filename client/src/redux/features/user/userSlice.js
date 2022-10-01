
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const { REACT_APP_API } = process.env;



export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: [],
        projects: [],
        project: [],
        tasks: []
    },
    reducers: {
        addProjects: (state, actions) => {
            state.projects = actions.payload
        },
        kickProject: (state, actions) => {
            state.projects = state.projects.filter(p => p.id !== actions.payload)
        },
        addTask: (state, actions) => {
            state.tasks = actions.payload
        },
        addProject: (state, actions) => {
            state.project = actions.payload
        },
        kickTask: (state, actions) => {
            state.tasks = state.tasks.filter(t => t.id !== actions.payload)
        },
        setUser: (state, actions) => {
            state.user = actions.payload
        }
    }
})

export const { addProjects, kickProject, addTask, addProject, kickTask, setUser } = userSlice.actions;

export default userSlice.reducer;



export const getProjects = () => async (dispatch) => {
    let user = JSON.parse(window.localStorage.getItem("user"))
    let { id } = user
    try {
        const resp = await axios.get(`${REACT_APP_API}/projects/${id}`, {
            headers: {
                "x-access-token": user.token
            }
        })
        dispatch(addProjects(resp.data))
    } catch (error) {
        console.log(error)
    }
}

export const deleteProject = (id) => async (dispatch) => {
    let user = JSON.parse(window.localStorage.getItem("user"))
    try {
        await axios.delete(`${REACT_APP_API}/projects/${id}`, {
            headers: {
                "x-access-token": user.token
            }
        })
        dispatch(kickProject(id))
    } catch (error) {
        console.log(error)
    }
}

export const getTasks = (id) => async (dispatch) => {
    let user = JSON.parse(window.localStorage.getItem("user"))
    try {
        const resp = await axios.get(`${REACT_APP_API}/tasks/${id}`, {
            headers: {
                "x-access-token": user.token
            }
        })
        dispatch(addTask(resp.data))
    } catch (error) {
        console.log(error)
    }
}

export const getProject = (id) => async (dispatch) => {
    let user = JSON.parse(window.localStorage.getItem("user"))
    try {
        const resp = await axios.get(`${REACT_APP_API}/project/${id}`, {
            headers: {
                "x-access-token": user.token
            }
        })
        dispatch(addProject(resp.data))
    } catch (error) {
        console.log(error)
    }
}

export const deleteTask = (id) => async (dispatch) => {
    let user = JSON.parse(window.localStorage.getItem("user"))
    try {
        await axios.delete(`${REACT_APP_API}/tasks/${id}`, {
            headers: {
                "x-access-token": user.token
            }
        })
        dispatch(kickTask(id))
    } catch (error) {
        console.log(error)
    }
}

export const updateStateTask = (id, done) => async (dispatch) => {
    let user = JSON.parse(window.localStorage.getItem("user"))
    try {
        let estado = !done
        await axios.put(`${REACT_APP_API}/tasks/state/${id}`, {
            estado
        }, {
            headers: {
                "x-access-token": user.token
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const getUser = (user) => (dispatch) => {
    dispatch(setUser(user))
}