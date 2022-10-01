import { Router } from "express";
import { createProject, deleteProject, getProjects, updateProject, getProject } from "../controllers/projects.controller.js";

import verifyToken from "./verifyToken.js";

const router = Router();

router.get('/projectt', (req, res) => {
    res.send("cargada")
})

router.get('/project/:id', verifyToken, getProject)
router.get('/projects/:id', verifyToken, getProjects)
router.post('/projects', verifyToken, createProject)
router.put('/projects/:id', verifyToken, updateProject)
router.delete('/projects/:id', verifyToken, deleteProject)

export default router;