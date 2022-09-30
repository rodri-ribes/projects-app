import { Task } from './Task.js';
import { Project } from './Project';
import { Users } from './Users.js'

Project.hasMany(Task, {
    foreignKey: 'projectId',
    sourceKey: 'id'
})

Task.belongsTo(Project, {
    foreignKey: 'projectId',
    target: 'id'
})

Users.hasMany(Project, {
    foreignKey: 'projectId',
    sourceKey: 'id'
})

Project.belongsTo(Users, {
    foreignKey: 'projectId',
    target: 'id'
})

