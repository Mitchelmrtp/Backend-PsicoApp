import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Usuario from './usuario.js';

const TipoUsuario = sequelize.define('TipoUsuario', {
    idTipoUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Usuario_id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id_usuario',
        },
    },
}, {
    timestamps: false,
});

// Relación entre TipoUsuario y Usuario
TipoUsuario.belongsTo(Usuario, { foreignKey: 'Usuario_id_usuario' });

export default TipoUsuario;
