import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Psicologo from './Psicologo.js';

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
  tableName: 'Usuario'

});

// Relación con Psicologo: Un Usuario puede tener muchos Psicologos
Usuario.hasMany(Psicologo, { foreignKey: 'Usuario_id_usuario', as: 'psicologos' });
Psicologo.belongsTo(Usuario, { foreignKey: 'Usuario_id_usuario', as: 'usuario' });

export default Usuario;
