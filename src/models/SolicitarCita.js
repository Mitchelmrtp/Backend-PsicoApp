import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const SolicitarCita = sequelize.define('SolicitarCita', {
  idSolicitarCita: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  Paciente_idPaciente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false
});

export default SolicitarCita;
