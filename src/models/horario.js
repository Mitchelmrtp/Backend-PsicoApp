import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Horario = sequelize.define('Horario', {
  id_horario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  evento: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  hora: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  PsicologoGeneral_id_psicologogeneral: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false
});

export default Horario;
