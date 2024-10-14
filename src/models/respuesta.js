// respuesta.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Cuestionario from './cuestionario.js';
import Paciente from './paciente.js';

const RespuestasCuestionario = sequelize.define('RespuestasCuestionario', {
    idRespuesta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idCuestionario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cuestionario,
            key: 'idCuestionario'
        }
    },
    idPaciente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Paciente,
            key: 'idPaciente'
        }
    },
    respuesta: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'RespuestasCuestionario',
    timestamps: false
});

// Definir relaciones
Cuestionario.hasMany(RespuestasCuestionario, { foreignKey: 'idCuestionario' });
RespuestasCuestionario.belongsTo(Cuestionario, { foreignKey: 'idCuestionario' });

Paciente.hasMany(RespuestasCuestionario, { foreignKey: 'idPaciente' });
RespuestasCuestionario.belongsTo(Paciente, { foreignKey: 'idPaciente' });

export default RespuestasCuestionario;