// index.js
import { Sequelize } from 'sequelize';
import sequelize from '../config/database.js';

// Importar todos los modelos
import Usuario from './usuario.js';
import Paciente from './paciente.js';
import Psicologo from './Psicologo.js';
import Cuestionario from './cuestionario.js';
import RespuestasCuestionario from './respuesta.js';  // Importar RespuestasCuestionario
import Historial from './historial.js';
import Horario from './horario.js';
import Reporte from './reporte.js';
import RevisionDiagnostica from './revisionDiagnostica.js';
import Sesion from './sesion.js';
import SolicitarCita from './SolicitarCita.js';
import Rutina from './Rutina.js';
// Definir relaciones entre los modelos

// Usuario - Paciente
Usuario.hasMany(Paciente, { foreignKey: 'Usuario_id_usuario' });
Paciente.belongsTo(Usuario, { foreignKey: 'Usuario_id_usuario' });

// Usuario - Psicologo
Usuario.hasMany(Psicologo, { foreignKey: 'Usuario_id_usuario' });
Psicologo.belongsTo(Usuario, { foreignKey: 'Usuario_id_usuario' });

// Cuestionario - RespuestasCuestionario
Cuestionario.hasMany(RespuestasCuestionario, { foreignKey: 'idCuestionario' });
RespuestasCuestionario.belongsTo(Cuestionario, { foreignKey: 'idCuestionario' });

// Paciente - RespuestasCuestionario
Paciente.hasMany(RespuestasCuestionario, { foreignKey: 'idPaciente' });
RespuestasCuestionario.belongsTo(Paciente, { foreignKey: 'idPaciente' });

// Paciente - Historial
Paciente.hasMany(Historial, { foreignKey: 'Paciente_idPaciente' });
Historial.belongsTo(Paciente, { foreignKey: 'Paciente_idPaciente' });

// Psicologo - Horario
Psicologo.hasMany(Horario, { foreignKey: 'id_psicologo' });
Horario.belongsTo(Psicologo, { foreignKey: 'id_psicologo' });

// Sesion - Psicologo / Paciente / RevisionDiagnostica
Sesion.belongsTo(Psicologo, { foreignKey: 'id_Psicologo' });
Sesion.belongsTo(Paciente, { foreignKey: 'Paciente_idPaciente' });
Sesion.belongsTo(RevisionDiagnostica, { foreignKey: 'RevisiónDiagnostica_idDiagnostico' });

// SolicitarCita - Paciente
SolicitarCita.belongsTo(Paciente, { foreignKey: 'Paciente_idPaciente' });
Paciente.hasMany(SolicitarCita, { foreignKey: 'Paciente_idPaciente' });

// RevisionDiagnostica - SolicitarCita
RevisionDiagnostica.belongsTo(SolicitarCita, { foreignKey: 'SolicitarCita_idSolicitarCita' });

// Reporte - Sesion
Reporte.belongsTo(Sesion, { foreignKey: 'Sesion_id_sesion' });

// Usuario - Psicologo (duplicado, puedes eliminar una de las definiciones si es necesario)
Usuario.hasOne(Psicologo, { foreignKey: 'Usuario_id_usuario' });
Psicologo.belongsTo(Usuario, { foreignKey: 'Usuario_id_usuario' });

// Paciente - Rutina
Paciente.hasMany(Rutina, { foreignKey: 'Paciente_idPaciente' });
Rutina.belongsTo(Paciente, { foreignKey: 'Paciente_idPaciente' });

// Exportar todos los modelos
export {
  Usuario,
  Paciente,
  Cuestionario,
  RespuestasCuestionario,
  Psicologo,
  Historial,
  Horario,
  Reporte,
  RevisionDiagnostica,
  Sesion,
  SolicitarCita,
  Rutina
};
