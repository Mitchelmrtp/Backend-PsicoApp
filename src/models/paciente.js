import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Usuario from './usuario.js';

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
      model: Usuario,
      key: 'id_usuario'
    }
  }
}, {
  timestamps: false
});

// Relación entre Paciente y Usuario
Paciente.belongsTo(Usuario, { foreignKey: 'Usuario_id_usuario' });

export default Paciente;
