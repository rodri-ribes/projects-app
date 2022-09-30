import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Project } from './Project.js';

export const Users = sequelize.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    passwordHash: {
        type: DataTypes.TEXT,
        allowNull: true
    }
})

/**RELACIONES */

Users.hasMany(Project, {
    foreignKey: 'UserId',
    sourceKey: 'id'
})

Project.belongsTo(Users, {
    target: 'id',
    foreignKey: 'UserId'
})
