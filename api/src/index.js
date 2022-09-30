import app from "./app.js";
import { sequelize } from './database/database.js';

import "./models/Project.js";
import "./models/Task.js";
import "./models/Users.js";


async function main() {
    try {
        await sequelize.sync({ force: false })
        app.listen(process.env.PORT || 3001, () => console.log('Server is listening... 3001'))
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();