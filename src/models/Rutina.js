// src/models/Rutina.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Paciente from './paciente.js';

const Rutina = sequelize.define('Rutina', {
  idRutina: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.STRING(250),
    allowNull: true,
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
  timestamps: false,
  tableName: 'Rutina'
});

// Definir relación con Paciente
Rutina.belongsTo(Paciente, { foreignKey: 'Paciente_idPaciente' });
Paciente.hasMany(Rutina, { foreignKey: 'Paciente_idPaciente' });

export default Rutina;