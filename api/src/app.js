import express from "express";
import projectsRoutes from './routes/projects.routes.js';
import taskRoutes from './routes/task.routes.js';
import usersRoutes from './routes/users.routers.js';
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

app.use(projectsRoutes);
app.use(taskRoutes);
app.use(usersRoutes);


export default app;