import app from "./src/app.js";
import { sequelize } from './src/database/database.js';

import "./src/models/Project.js";
import "./src/models/Task.js";
import "./src/models/Users.js";



async function main() {
    try {
        // await sequelize.sync({ force: false })
        app.listen(process.env.PORT || 3001, () => console.log('Server is listening... 3001'))
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();