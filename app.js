import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Importar rutas desde el directorio correcto
import UsuarioRoutes from './src/routes/UsuarioRoutes.js';
import SolicitarCitaRoutes from './src/routes/solicitarCitaRoutes.js';  // Asegúrate que esté nombrado correctamente
import PacienteRoutes from './src/routes/pacienteRoutes.js';
import CuestionarioRoutes from './src/routes/CuestionarioRoutes.js';
import RespuestaRoutes from './src/routes/RespuestaRoutes.js';  // Importa las rutas de respuestas

import PsicologoRoutes from './src/routes/PsicologoRoutes.js';
import HistorialRoutes from './src/routes/historialRoutes.js';
import HorarioRoutes from './src/routes/horarioRoutes.js';
import ReporteRoutes from './src/routes/reporteRoutes.js';
import RevisionDiagnosticaRoutes from './src/routes/revisionDiagnosticaRoutes.js';
import SesionRoutes from './src/routes/SesionRoutes.js';



const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Ruta de prueba inicial
app.get('/', (req, res) => {
    return res.json({ result: 'C LOGRÓ' });
});

// Configurar rutas
app.use("/usuarios", UsuarioRoutes);
app.use("/citas", SolicitarCitaRoutes);  
app.use("/pacientes", PacienteRoutes);
app.use("/cuestionarios", CuestionarioRoutes);
app.use('/respuestas', RespuestaRoutes);  

app.use("/Psicologos", PsicologoRoutes);
app.use("/historiales", HistorialRoutes);
app.use("/horarios", HorarioRoutes);
app.use("/reportes", ReporteRoutes);
app.use("/revisionDiagnostica", RevisionDiagnosticaRoutes);
app.use("/sesiones", SesionRoutes);



export default app;
