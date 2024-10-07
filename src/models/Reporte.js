import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Reporte = sequelize.define('Reporte', {
  id_reporte: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Sesion_id_sesion: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  descripcion: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: true,
  }
}, {
  timestamps: false
});

export default Reporte;
