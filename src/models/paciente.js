import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Paciente = sequelize.define('Paciente', {
  idPaciente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  historial: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  Usuario_id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Usuario',
      key: 'id_usuario',
    },
    onDelete: 'CASCADE',
  }
}, {
  timestamps: false,
  tableName: 'Paciente' 
});

export default Paciente;
