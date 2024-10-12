import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Sesion = sequelize.define('Sesion', {
  id_sesion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Psicologo_id_Psicologo: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
  },
  RevisiónDiagnostica_idDiagnostico: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false
});

export default Sesion;
