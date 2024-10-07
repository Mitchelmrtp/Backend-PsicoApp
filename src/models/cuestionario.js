import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Cuestionario = sequelize.define('Cuestionario', {
  id_cuestionario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  Paciente_idPaciente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false
});

export default Cuestionario;
