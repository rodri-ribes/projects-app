
import { Project } from "../models/Project.js"
import { Task } from "../models/Task.js"
import { Users } from "../models/Users.js"

export const getTasks = async (req, res) => {

    const user = await Users.findOne({ where: { id: req.userId } })

    if (user) {
        let { id } = req.params;

        try {
            const tasks = await Task.findAll({
                where: { projectId: id }
            })
            res.json(tasks)
        } catch (error) {
            return res.status(404).json({ message: error.message })
        }
    } else {
        res.status(401).json({ error: "token invalid" })
    }
}
export const createTasks = async (req, res) => {

    const user = await Users.findOne({ where: { id: req.userId } });

    if (user) {
        const id = req.params.project;
        const { name, description, done } = req.body;
        try {
            const project = await Project.findOne({
                where: { id }
            })
            const task = await Task.create({
                name,
                done,
                description,
            })
            await project.addTasks(task);
            res.send("exito")
        } catch (error) {
            return res.status(404).json({ message: error.message })
        }
    } else {
        res.status(401).json({ error: "token invalid" })
    }
}


export const updateTasks = async (req, res) => {

    const user = await Users.findOne({ where: { id: req.userId } });

    if (user) {
        const id = req.params.change;
        const { name, description, done } = req.body;
        try {
            const task = await Task.findOne({
                where: { id },
            })
            task.set({ name, done, description })
            await task.save();
            res.json(task)

        } catch (error) {
            return res.status(404).json({ message: error.message })
        }
    } else {
        res.status(401).json({ error: "token invalid" })
    }
}

export const updateStateTask = async (req, res) => {

    const user = await Users.findOne({ where: { id: req.userId } });
    if (user) {
        const { id } = req.params;
        const done = req.body.estado;

        try {
            const task = await Task.findOne({
                where: { id },
            })
            task.set({ done })
            await task.save();
            res.json(task)
        } catch (error) {
            return res.status(404).json({ message: error.message })
        }
    } else {
        res.status(401).json({ error: "token invalid" })
    }
}

export const deleteTask = async (req, res) => {

    const user = await Users.findOne({ where: { id: req.userId } });

    if (user) {
        const { id } = req.params;
        try {
            await Task.destroy({
                where: { id },
            })
            res.send('Eliminado con exito...')
        } catch (error) {
            return res.status(404).json({ message: error.message })
        }
    } else {
        res.status(401).json({ error: "token invalid" })
    }
}