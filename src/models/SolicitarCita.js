import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Paciente from './paciente.js';

const SolicitarCita = sequelize.define('SolicitarCita', {
    idSolicitarCita: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    hora: {
        type: DataTypes.TIME,
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

SolicitarCita.belongsTo(Paciente, { foreignKey: 'Paciente_idPaciente' });

export default SolicitarCita;
