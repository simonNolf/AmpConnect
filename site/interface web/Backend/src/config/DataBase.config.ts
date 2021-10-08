import databaseConfig from "../../ressources/database.config.json";
import {Sequelize} from "sequelize-typescript";
import Module from "../model/modules.model";
// @ts-ignore
const sequelize = new Sequelize({
    database: databaseConfig.database,
    dialect: databaseConfig.dialect,
    username: 'root',
    password: '',
    storage: databaseConfig.storage,
    models:[Module]
})
export default sequelize;