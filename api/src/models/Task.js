import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Task = sequelize.define('task', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false
})