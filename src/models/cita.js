import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Paciente from './paciente.js';
import PsicologoGeneral from './psicologogeneral.js';

const Cita = sequelize.define('Cita', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    psicologoGeneralId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: PsicologoGeneral,
            key: 'id_psicologogeneral'
        }
    },
    pacienteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Paciente,
            key: 'idPaciente'
        }
    }
}, {
    timestamps: true
});

export default Cita;
