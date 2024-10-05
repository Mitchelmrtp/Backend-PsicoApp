import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  DNI: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  NumCelular: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  timestamps: false,
});

export default Usuario;
