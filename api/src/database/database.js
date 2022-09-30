import Sequelize from "sequelize";
import * as dotenv from 'dotenv'
dotenv.config()


export const sequelize = new Sequelize(process.env.URL_POSTGRESQL, {
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})