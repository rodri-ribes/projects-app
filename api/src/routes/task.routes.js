import { Router } from "express";
import { getTasks, updateTasks, deleteTask, createTasks, updateStateTask } from '../controllers/tasks.controller.js'
import verifyToken from "./verifyToken.js";

let router = Router();

router.get('/tasks/:id', verifyToken, getTasks)

router.post('/tasks/:project', verifyToken, createTasks)
router.put('/tasks/:change', verifyToken, updateTasks)
router.put('/tasks/state/:id', verifyToken, updateStateTask)
router.delete('/tasks/:id', verifyToken, deleteTask)

export default router