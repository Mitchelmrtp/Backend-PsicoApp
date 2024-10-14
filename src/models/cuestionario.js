// cuestionario.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Cuestionario = sequelize.define('Cuestionario', {
    idCuestionario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pregunta: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Cuestionario',
    timestamps: false
});

export default Cuestionario;