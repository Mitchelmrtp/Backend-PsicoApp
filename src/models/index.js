import { Sequelize } from 'sequelize';
import sequelize from '../config/database.js';

// Importar todos los modelos
import Usuario from './usuario.js';
import Paciente from './paciente.js';
import PsicologoGeneral from './psicologogeneral.js';
import Cuestionario from './cuestionario.js';
import Especialista from './especialista.js';
import Historial from './historial.js';
import Horario from './horario.js';
import Reporte from './reporte.js';
import RevisionDiagnostica from './revisionDiagnostica.js';
import Sesion from './sesion.js';
import SolicitarCita from './solicitarCita.js';

// Definir relaciones entre los modelos
Usuario.hasOne(Paciente, { foreignKey: 'Usuario_id_usuario' });
Paciente.belongsTo(Usuario, { foreignKey: 'Usuario_id_usuario' });

Usuario.hasOne(PsicologoGeneral, { foreignKey: 'Usuario_id_usuario' });
PsicologoGeneral.belongsTo(Usuario, { foreignKey: 'Usuario_id_usuario' });

Paciente.hasMany(Cuestionario, { foreignKey: 'Paciente_idPaciente' });
Cuestionario.belongsTo(Paciente, { foreignKey: 'Paciente_idPaciente' });

PsicologoGeneral.hasMany(Especialista, { foreignKey: 'PsicologoGeneral_id_psicologogeneral' });
Especialista.belongsTo(PsicologoGeneral, { foreignKey: 'PsicologoGeneral_id_psicologogeneral' });

Paciente.hasMany(Historial, { foreignKey: 'Paciente_idPaciente' });
Historial.belongsTo(Paciente, { foreignKey: 'Paciente_idPaciente' });

PsicologoGeneral.hasMany(Horario, { foreignKey: 'PsicologoGeneral_id_psicologogeneral' });
Horario.belongsTo(PsicologoGeneral, { foreignKey: 'PsicologoGeneral_id_psicologogeneral' });

Sesion.belongsTo(Especialista, { foreignKey: 'Especialista_id_especialista' });
Sesion.belongsTo(Paciente, { foreignKey: 'Paciente_idPaciente' });
Sesion.belongsTo(RevisionDiagnostica, { foreignKey: 'RevisiónDiagnostica_idDiagnostico' });

SolicitarCita.belongsTo(Paciente, { foreignKey: 'Paciente_idPaciente' });
RevisionDiagnostica.belongsTo(SolicitarCita, { foreignKey: 'SolicitarCita_idSolicitarCita' });

Reporte.belongsTo(Sesion, { foreignKey: 'Sesion_id_sesion' });

// Exportar todos los modelos
export {
    Usuario,
    Paciente,
    PsicologoGeneral,
    Cuestionario,
    Especialista,
    Historial,
    Horario,
    Reporte,
    RevisionDiagnostica,
    Sesion,
    SolicitarCita
};
