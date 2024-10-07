import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const RevisionDiagnostica = sequelize.define('RevisionDiagnostica', {
  idDiagnostico: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Diagnostico: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  pruebaDianostica: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  SolicitarCita_idSolicitarCita: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false
});

export default RevisionDiagnostica;
