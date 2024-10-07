import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Historial = sequelize.define('Historial', {
  idHistorial: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Descripción: {
    type: DataTypes.STRING(250),
    allowNull: true,
  },
  Paciente_idPaciente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false
});

export default Historial;
