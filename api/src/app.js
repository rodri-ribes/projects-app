import express, { Router } from "express";
import projectsRoutes from './routes/projects.routes.js';
import taskRoutes from './routes/task.routes.js';
import usersRoutes from './routes/users.routers.js';
// import cors from 'cors'

const app = express();

const router = Router()

router.get("/", (req, res) => {
    res.send("server is load")
})

// app.use(cors())
app.use(express.json())

app.use(projectsRoutes);
app.use(taskRoutes);
app.use(usersRoutes);


export default app;