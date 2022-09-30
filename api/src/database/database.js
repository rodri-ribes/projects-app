import Sequelize from "sequelize";
// import * as dotenv from 'dotenv'
// dotenv.config()


export const sequelize = new Sequelize("postgresql://postgres:tveE3y5oW6aREykN39ta@containers-us-west-82.railway.app:6033/railway", {
    logging: false,
    // dialectOptions: {
    //     ssl: {
    //         require: true,
    //         rejectUnauthorized: false
    //     }
    // }
})