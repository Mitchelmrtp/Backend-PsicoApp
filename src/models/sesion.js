import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Sesion = sequelize.define('Sesion', {
  idSesion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  reporteProgreso: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  reporteEmociones: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Paciente_idPaciente: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Paciente',
      key: 'idPaciente',
    },
    onDelete: 'CASCADE',
  },
  Psicologo_idPsicologo: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Psicologo',
      key: 'id_psicologo',  // Asegúrate de que el nombre coincide con el de Psicologo
    },
    onDelete: 'CASCADE',
  },
}, {
  timestamps: false,
  tableName: 'Sesion'
});

export default Sesion;
