import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Importar rutas desde el directorio correcto
import UsuarioRoutes from './src/routes/usuarioRoutes.js';
import SolicitarCitaRoutes from './src/routes/solicitarCitaRoutes.js';  // Asegúrate que esté nombrado correctamente
import PacienteRoutes from './src/routes/pacienteRoutes.js';
import CuestionarioRoutes from './src/routes/cuestionarioRoutes.js';
import PsicologoRoutes from './src/routes/PsicologoRoutes.js';
import HistorialRoutes from './src/routes/historialRoutes.js';
import HorarioRoutes from './src/routes/horarioRoutes.js';
import ReporteRoutes from './src/routes/reporteRoutes.js';
import RevisionDiagnosticaRoutes from './src/routes/revisionDiagnosticaRoutes.js';
import SesionRoutes from './src/routes/sesionRoutes.js';
import TipoUsuarioRoutes from './src/routes/tipoUsuarioRoutes.js'; // Nueva ruta


// Crear instancia de la aplicación
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Ruta de prueba inicial
app.get('/', (req, res) => {
    return res.json({ result: 'OK' });
});

// Configurar rutas
app.use("/usuarios", UsuarioRoutes);
app.use("/citas", SolicitarCitaRoutes);  // Verifica que el nombre de la ruta coincida con el archivo de ruta
app.use("/pacientes", PacienteRoutes);
app.use("/cuestionarios", CuestionarioRoutes);
app.use("/Psicologos", PsicologoRoutes);
app.use("/historiales", HistorialRoutes);
app.use("/horarios", HorarioRoutes);
app.use("/reportes", ReporteRoutes);
app.use("/revisionDiagnostica", RevisionDiagnosticaRoutes);
app.use("/sesiones", SesionRoutes);
app.use("/tiposUsuarios", TipoUsuarioRoutes); 

// Exportar la app para usar en el servidor
export default app;
