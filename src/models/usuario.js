import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING(15),
    allowNull: false,
    unique: true,
  },
  contrasena: {
    type: DataTypes.STRING(12),
    allowNull: false,
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  DNI: {
    type: DataTypes.STRING(8),
    allowNull: true,
    unique: true,
  },
  NumCelular: {
    type: DataTypes.STRING(11),
    allowNull: true,
  }
}, {
  timestamps: false
});

export default Usuario;
