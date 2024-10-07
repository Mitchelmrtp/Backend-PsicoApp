import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import SolicitarCita from './solicitarCita.js';

const RevisionDiagnostica = sequelize.define('RevisionDiagnostica', {
    idDiagnostico: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Diagnostico: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    pruebaDiagnostica: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    SolicitarCita_idSolicitarCita: {
        type: DataTypes.INTEGER,
        references: {
            model: SolicitarCita,
            key: 'idSolicitarCita',
        },
        allowNull: false,
    }
}, {
    timestamps: false
});

RevisionDiagnostica.belongsTo(SolicitarCita, { foreignKey: 'SolicitarCita_idSolicitarCita' });

export default RevisionDiagnostica;
