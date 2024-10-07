import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const TipoUsuario = sequelize.define('TipoUsuario', {
  idTipoUsuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  rol: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Usuario_id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false
});

export default TipoUsuario;
