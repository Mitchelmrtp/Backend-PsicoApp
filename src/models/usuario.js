import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import PsicologoGeneral from './psicologogeneral.js';  // Importar PsicologoGeneral

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  DNI: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  NumCelular: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  rol: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Paciente',
  }
}, {
  freezeTableName: true,  // Evita que Sequelize pluralice el nombre de la tabla
  timestamps: false,
});

// Relación con PsicologoGeneral
Usuario.hasOne(PsicologoGeneral, { foreignKey: 'Usuario_id_usuario' });
PsicologoGeneral.belongsTo(Usuario, { foreignKey: 'Usuario_id_usuario' });

export default Usuario;
