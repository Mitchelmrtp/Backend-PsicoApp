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
  Estado_emocional: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  Temas_tratados: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  Dificultades: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  Comentarios: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  Fecha: {
    type: DataTypes.DATE,
    allowNull: true,
  }
}, {
  timestamps: false
});

export default Reporte;
