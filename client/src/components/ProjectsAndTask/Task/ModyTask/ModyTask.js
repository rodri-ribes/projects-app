import React, { useState } from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik';
import style from './ModyTask.module.css'

import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getTasks } from '../../../../redux/features/user/userSlice';

const { REACT_API } = process.env;


export default function ModyTask({ idProject }) {

    const [confirm, setConfirm] = useState({
        message: "",
        visible: null,
    })

    let dispatch = useDispatch();
    let tasks = useSelector(state => state.user.tasks);

    return (
        <Formik
            initialValues={{
                change: 0,
                name: "",
                description: "",
                done: ""
            }}

            onSubmit={async (valores, { resetForm }) => {

                let { name, description, done, change } = valores;

                name = name.charAt(0).toUpperCase() + name.slice(1)
                description = description.charAt(0).toUpperCase() + description.slice(1)

                let user = JSON.parse(window.localStorage.getItem("user"))

                try {
                    await axios.put(`${REACT_API}/tasks/${change}`, {
                        name, description, done
                    }, {
                        headers: {
                            "x-access-token": user.token
                        }
                    })
                    resetForm();
                    dispatch(getTasks(idProject));
                    setConfirm({ message: "Task Modified successfully", visible: true })
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
                if (valores.done !== "false" && valores.done !== "true") {
                    errores.done = "Select a State"
                }
                if (valores.change === 0) {
                    errores.change = "Select a Task"
                }

                return errores;
            }}
        >
            {({ errors }) => (
                <div className={style.ContainerForm}>
                    <Form className={style.Container}>
                        <div className={style.Container__Div}>
                            <Field name="change" as="select" className={style.Container__Div_Input}>
                                <option value={0}>Select a Task</option>
                                {tasks.map(t => {
                                    return (
                                        <option value={t.id} key={t.id}>{t.name}</option>
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
                            <Field name="done" as="select" className={style.Container__Div_Input}>
                                <option value="not">You finished the task?</option>
                                <option value="false">Not</option>
                                <option value="true">Yes</option>
                            </Field>
                            <ErrorMessage name='done' component={() => (<div className={style.Container__Div_Error}><p>{errors.done}</p></div>)} />
                        </div>
                        <button type='submit' className={style.Container__Button}>Modify Task</button>
                        {confirm ? <div className={style.Container__Div_Sucess}><p>{confirm.message}</p></div> : null}
                    </Form>
                </div>
            )}
        </Formik>
    )
}
