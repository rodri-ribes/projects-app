import React, { useState } from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik';
import style from './ModyProject.module.css'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getProjects } from '../../../../redux/features/user/userSlice';
const { REACT_APP_API } = process.env;



export default function ModyProject() {

    const [confirm, setConfirm] = useState({
        message: "",
        visible: null,
    })

    let dispatch = useDispatch();

    let projects = useSelector(state => state.user.projects)

    return (
        <Formik
            initialValues={{
                change: 0,
                name: "",
                priority: "",
                description: ""
            }}

            onSubmit={async (valores, { resetForm }) => {

                let { name, priority, description, change } = valores;

                name = name.charAt(0).toUpperCase() + name.slice(1)
                description = description.charAt(0).toUpperCase() + description.slice(1)

                let user = JSON.parse(window.localStorage.getItem("user"))

                try {
                    await axios.put(`${REACT_APP_API}/projects/${change}`, {
                        name, priority, description
                    }, {
                        headers: {
                            "x-access-token": user.token
                        }
                    })
                    resetForm();
                    dispatch(getProjects())
                    setConfirm({ message: "Successfully Modified Project", visible: true })

                } catch (error) {
                    console.log(error)
                }
                setTimeout(() => {
                    setConfirm({ message: "", visible: null })
                }, 2000);
            }}
            validate={(valores) => {
                let errores = {};

                if (!valores.name) {
                    errores.name = "Enter Name"
                }
                if (!valores.description) {
                    errores.description = "Enter Description"
                }
                if (valores.priority !== "High" && valores.priority !== "Medium" && valores.priority !== "Low") {
                    errores.priority = "Select a priority"
                }
                if (valores.change === 0) {
                    errores.change = "Select a Project"
                }

                return errores;
            }}
        >
            {({ errors }) => (
                <div className={style.ContainerForm}>
                    <Form className={style.Container}>
                        <div className={style.Container__Div}>
                            <Field name="change" as="select" className={style.Container__Div_Input}>
                                <option value={0}>Select a Project</option>
                                {projects.map(p => {
                                    return (
                                        <option value={p.id} key={p.id}>{p.name}</option>
                                    )
                                })}
                            </Field>
                            <ErrorMessage name='change' component={() => (<div className={style.Container__Div_Error}><p>{errors.change}</p></div>)} />
                        </div>
                        <div className={style.Container__Div}>
                            <Field className={style.Container__Div_Input}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                            />
                            <ErrorMessage name='name' component={() => (<div className={style.Container__Div_Error}><p>{errors.name}</p></div>)} />
                        </div>
                        <div className={style.Container__Div}>
                            <Field className={style.Container__Div_Input}
                                type="text"
                                id="description"
                                name="description"
                                placeholder="Description"
                            />
                            <ErrorMessage name='description' component={() => (<div className={style.Container__Div_Error}><p>{errors.description}</p></div>)} />
                        </div>
                        <div className={style.Container__Div}>
                            <Field name="priority" as="select" className={style.Container__Div_Input}>
                                <option value="not">Select a Priority</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </Field>
                            <ErrorMessage name='priority' component={() => (<div className={style.Container__Div_Error}><p>{errors.priority}</p></div>)} />
                        </div>
                        <button type='submit' className={style.Container__Button}>Modify Project</button>
                        {confirm ? <div className={style.Container__Div_Sucess}><p>{confirm.message}</p></div> : null}
                    </Form>
                </div>
            )}
        </Formik>
    )
}
