import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Especialista = sequelize.define('Especialista', {
  id_especialista: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  especialidad: {
    type: DataTypes.STRING,
    allowNull: false,  // No permitir nulos, la especialidad es obligatoria
  },
  PsicologoGeneral_id_psicologogeneral: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'PsicologoGeneral',
      key: 'id_psicologogeneral',
    },
  },
}, {
  timestamps: false,
  freezeTableName: true, // Evita pluralización
});

export default Especialista;
