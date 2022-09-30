import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Task } from './Task.js';

export const Project = sequelize.define('projects', {
    name: {
        type: DataTypes.STRING
    },
    priority: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
})

Project.hasMany(Task, {
    foreignKey: 'projectId',
    sourceKey: 'id'
})

Task.belongsTo(Project, {
    foreignKey: 'projectId',
    target: 'id'
})