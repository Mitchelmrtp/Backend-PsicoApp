import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Paciente from './paciente.js';

const Historial = sequelize.define('Historial', {
    idHistorial: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Descripcion: {
        type: DataTypes.STRING(250),
        allowNull: true,
    },
    Paciente_idPaciente: {
        type: DataTypes.INTEGER,
        references: {
            model: Paciente,
            key: 'idPaciente',
        },
        allowNull: false,
    }
}, {
    timestamps: false
});

Historial.belongsTo(Paciente, { foreignKey: 'Paciente_idPaciente' });

export default Historial;
