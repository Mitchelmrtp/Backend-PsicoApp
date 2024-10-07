import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Paciente from './paciente.js';

const Cuestionario = sequelize.define('Cuestionario', {
  id_cuestionario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: true
  },
  Paciente_idPaciente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Paciente,
      key: 'idPaciente'
    }
  }
}, {
  timestamps: false
});

// Relación entre Cuestionario y Paciente
Cuestionario.belongsTo(Paciente, { foreignKey: 'Paciente_idPaciente' });

export default Cuestionario;
