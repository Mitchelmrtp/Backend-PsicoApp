import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import PsicologoGeneral from './psicologogeneral.js';

const Horario = sequelize.define('Horario', {
    id_horario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    evento: {
        type: DataTypes.STRING(20),
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
    PsicologoGeneral_id_psicologogeneral: {
        type: DataTypes.INTEGER,
        references: {
            model: PsicologoGeneral,
            key: 'id_psicologogeneral',
        },
        allowNull: true,
    }
}, {
    timestamps: false
});

Horario.belongsTo(PsicologoGeneral, { foreignKey: 'PsicologoGeneral_id_psicologogeneral' });

export default Horario;
