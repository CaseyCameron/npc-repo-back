import Sequelize from 'sequelize';
import db from '../utils/db.js';

class Npc extends Sequelize.Model { }

Npc.init(
  {
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    race: {
      type: Sequelize.DataTypes.STRING,
    },
    alignment: {
      type: Sequelize.DataTypes.STRING,
    },
    description: {
      type: Sequelize.DataTypes.TEXT,
    },
    image: {
      type: Sequelize.DataTypes.STRING,
    }
  },
  {
    sequelize: db,
    modelName: 'Npc'
  }
);

export default Npc;
