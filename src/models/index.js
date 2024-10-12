import { Sequelize } from 'sequelize';
import sequelize from '../config/database.js';

// Importar todos los modelos
import Usuario from './usuario.js';
import Paciente from './paciente.js';
import Psicologo from './Psicologo.js';
import Cuestionario from './cuestionario.js';
import Historial from './historial.js';
import Horario from './horario.js';
import Reporte from './reporte.js';
import RevisionDiagnostica from './revisionDiagnostica.js';
import Sesion from './sesion.js';
import SolicitarCita from './solicitarCita.js';

// Definir relaciones entre los modelos
Usuario.hasOne(Paciente, { foreignKey: 'Usuario_id_usuario' });
Paciente.belongsTo(Usuario, { foreignKey: 'Usuario_id_usuario' });

Usuario.hasOne(Psicologo, { foreignKey: 'Usuario_id_usuario' });
Psicologo.belongsTo(Usuario, { foreignKey: 'Usuario_id_usuario' });

Paciente.hasMany(Cuestionario, { foreignKey: 'Paciente_idPaciente' });
Cuestionario.belongsTo(Paciente, { foreignKey: 'Paciente_idPaciente' });


Paciente.hasMany(Historial, { foreignKey: 'Paciente_idPaciente' });
Historial.belongsTo(Paciente, { foreignKey: 'Paciente_idPaciente' });

Psicologo.hasMany(Horario, { foreignKey: 'id_psicologo' });
Horario.belongsTo(Psicologo, { foreignKey: 'id_psicologo' });

Sesion.belongsTo(Psicologo, { foreignKey: 'id_Psicologo' });
Sesion.belongsTo(Paciente, { foreignKey: 'Paciente_idPaciente' });
Sesion.belongsTo(RevisionDiagnostica, { foreignKey: 'RevisiónDiagnostica_idDiagnostico' });

SolicitarCita.belongsTo(Paciente, { foreignKey: 'Paciente_idPaciente' });
RevisionDiagnostica.belongsTo(SolicitarCita, { foreignKey: 'SolicitarCita_idSolicitarCita' });

Reporte.belongsTo(Sesion, { foreignKey: 'Sesion_id_sesion' });

// Exportar todos los modelos
export {
    Usuario,
    Paciente,
    Cuestionario,
    Psicologo,
    Historial,
    Horario,
    Reporte,
    RevisionDiagnostica,
    Sesion,
    SolicitarCita
  };
  