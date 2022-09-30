import { Project } from "../models/Project.js";
import { Users } from "../models/Users.js";


export const getProject = async (req, res) => {

    const user = await Users.findOne({ where: { id: req.userId } })

    if (user) {
        let { id } = req.params;

        try {
            const project = await Project.findOne({
                where: { id: id }
            })
            res.json(project)
        } catch (error) {
            return res.status(404).json({ message: error.message })
        }
    } else {
        res.status(401).json({ error: "token invalid" })
    }
}

export const getProjects = async (req, res) => {

    const user = await Users.findOne({ where: { id: req.userId } })

    if (user) {
        let { id } = req.params;

        try {
            const projects = await Project.findAll({
                where: { UserId: id }
            })
            res.json(projects)
        } catch (error) {
            return res.status(404).json({ message: error.message })
        }

    } else {
        res.status(401).json({ error: "token invalid" })
    }

}


export const createProject = async (req, res) => {

    const user = await Users.findOne({ where: { id: req.userId } })

    if (user) {
        const { name, priority, description, id } = req.body

        try {
            const newProject = await Project.create({
                name,
                priority,
                description
            })

            const user = await Users.findOne({
                where: { id }
            })

            await user.addProjects(newProject)
            res.send("exito")
        } catch (error) {
            return res.status(404).json({ message: error.message })
        }
    } else {
        res.status(401).json({ error: "token invalid" })
    }
}

export const updateProject = async (req, res) => {

    const user = await Users.findOne({ where: { id: req.userId } })

    if (user) {
        const { id } = req.params;
        const { name, priority, description } = req.body;

        try {
            const project = await Project.findByPk(id);
            project.name = name,
                project.priority = priority,
                project.description = description,
                await project.save()
            res.json(project)
        } catch (error) {
            return res.status(404).json({ message: error.message })
        }
    } else {
        res.status(401).json({ error: "token invalid" })
    }

}
export const deleteProject = async (req, res) => {

    const user = await Users.findOne({ where: { id: req.userId } })

    if (user) {
        const { id } = req.params;
        try {
            await Project.destroy({
                where: {
                    id,
                }
            })
            res.send('eliminado con exito...')
        } catch (error) {
            return res.status(404).json({ message: error.message })
        }
    } else {
        res.status(401).json({ error: "token invalid" });
    }
}
