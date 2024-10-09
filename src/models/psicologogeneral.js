import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

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
      model: 'Usuario',
      key: 'id_usuario',
    },
    onDelete: 'CASCADE',
  }
}, {
  timestamps: false,
  freezeTableName: true,  // Evita pluralización automática
});

export default PsicologoGeneral;
