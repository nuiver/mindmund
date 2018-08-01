

// export function TodoItem(sequelize, DataTypes) {
//   const Item = sequelize.define('TodoItem', {
//     content: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     complete: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false
//     }
//   })

//   Item.associate = models => {
//     Item.belongsTo(models.Todo, {
//       foreignKey: 'todoId',
//       onDelete: 'CASCADE'
//     })
//   }

//   return Item
// };

// class TodoItem {

//   constructor(sequalize, Datatypes) {

//   }

// }