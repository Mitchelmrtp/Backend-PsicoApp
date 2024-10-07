import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Usuario from './usuario.js';

const PsicologoGeneral = sequelize.define('PsicologoGeneral', {
  id_psicologogeneral: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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

// Relación entre PsicologoGeneral y Usuario
PsicologoGeneral.belongsTo(Usuario, { foreignKey: 'Usuario_id_usuario' });

export default PsicologoGeneral;
