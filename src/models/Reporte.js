import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Sesion from './sesion.js';

const Reporte = sequelize.define('Reporte', {
    id_reporte: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Sesion_id_sesion: {
        type: DataTypes.INTEGER,
        references: {
            model: Sesion,
            key: 'id_sesion',
        },
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: true,
    }
}, {
    timestamps: false
});

Reporte.belongsTo(Sesion, { foreignKey: 'Sesion_id_sesion' });

export default Reporte;
