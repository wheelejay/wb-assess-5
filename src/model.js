import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///animals');

export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }

  getFullName() {
    return `${this.fname} ${this.lname}`;
  }
}

Human.init({
  human_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  fname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize: db,
  modelName: 'Human',
  tableName: 'humans',
});


export class Animal extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Animal.init({
  animal_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  species: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birth_year: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize: db,
  modelName: 'Animal',
  tableName: 'animals',
});

Human.hasMany(Animal, { foreignKey: 'human_id' });
Animal.belongsTo(Human, { foreignKey: 'human_id' });

export default db;
