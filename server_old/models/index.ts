// import * as fs from 'fs'
// import * as path from 'path'
// import * as Sequelize from 'sequelize'
// import productFactory from './todo'

// const basename = path.basename(module.filename)
// const env = process.env.NODE_ENV || 'development'
// import config = require(__dirname + '/../config/config.json')[env]

// const sequelize = config.use_env_variable
//   ? new Sequelize(process.env[config.use_env_variable])
//   : new Sequelize(config.database, config.username, config.password, config)


// fs.readdirSync(__dirname)
//   .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
//   .forEach(file => {
//     const model = sequelize.import(path.join(__dirname, file))
//     db[model.name] = model
//   })

// const db = {
//   sequelize,
//   Sequelize,
//   Product: productFactory(sequelize)
// }

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db)
//   }
// })

// export default db
