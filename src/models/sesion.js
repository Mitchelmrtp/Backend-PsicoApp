import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Paciente from './paciente.js';
import Especialista from './especialista.js';
import RevisionDiagnostica from './RevisionDiagnostica.js';

const Sesion = sequelize.define('Sesion', {
    id_sesion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Especialista_id_especialista: {
        type: DataTypes.INTEGER,
        references: {
            model: Especialista,
            key: 'id_especialista',
        },
        allowNull: true,
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
    },
    RevisiónDiagnostica_idDiagnostico: {
        type: DataTypes.INTEGER,
        references: {
            model: RevisionDiagnostica,
            key: 'idDiagnostico',
        },
        allowNull: true,
    }
}, {
    timestamps: false
});

Sesion.belongsTo(Paciente, { foreignKey: 'Paciente_idPaciente' });
Sesion.belongsTo(Especialista, { foreignKey: 'Especialista_id_especialista' });
Sesion.belongsTo(RevisionDiagnostica, { foreignKey: 'RevisiónDiagnostica_idDiagnostico' });

export default Sesion;
