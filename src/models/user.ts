import * as Sequelize from 'sequelize'

export interface UserAttributes {
  username?: string
  password?: string
  firstName?: string
  lastName?: string
  email?: string
  lastLoginDate?: string
  createdAt?: string
  updatedAt?: string
}

type UserInstance = Sequelize.Instance<UserAttributes> & UserAttributes

export default (sequelize: Sequelize.Sequelize) => {
  const attributes: SequelizeAttributes<UserAttributes> = {
    username: {
      allowNull: false,
      type: Sequelize.TEXT
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING
    },
    firstName: {
      allowNull: false,
      type: Sequelize.STRING
    },
    lastName: {
      allowNull: false,
      type: Sequelize.STRING
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING
    },
    lastLoginDate: {
      type: Sequelize.DATE
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    }
  }

  const options = {
    name: {
      plural: 'users',
      singular: 'user'
    }
  }

  const User = sequelize.define<UserInstance, UserAttributes>('User', attributes, options)

  // User.associate = models => {

  // }
  const tempUser = User as any
  tempUser.prototype.toJSON = function() {
    const values = { ...this.get() }

    delete values.password
    return values
  }

  return tempUser as Sequelize.Model<UserInstance, UserAttributes>
}
