import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import PsicologoGeneral from './psicologogeneral.js';

const Especialista = sequelize.define('Especialista', {
    id_especialista: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    especialidad: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    PsicologoGeneral_id_psicologogeneral: {
        type: DataTypes.INTEGER,
        references: {
            model: PsicologoGeneral,
            key: 'id_psicologogeneral'
        }
    }
}, {
    timestamps: false
});

Especialista.belongsTo(PsicologoGeneral, { foreignKey: 'PsicologoGeneral_id_psicologogeneral' });

export default Especialista;