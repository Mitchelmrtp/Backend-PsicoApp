import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Paciente from './paciente.js';

const SolicitarCita = sequelize.define('SolicitarCita', {
  idSolicitarCita: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  motivo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Paciente_idPaciente: {
    type: DataTypes.INTEGER,
    references: {
      model: Paciente,
      key: 'idPaciente',
    },
  },
}, {
  tableName: 'SolicitarCita',
  timestamps: false,
});

export default SolicitarCita;
