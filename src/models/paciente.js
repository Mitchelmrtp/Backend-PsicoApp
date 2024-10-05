import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Paciente = sequelize.define('Paciente', {
  idPaciente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  historial: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  Usuario_id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false
});

export default Paciente;
