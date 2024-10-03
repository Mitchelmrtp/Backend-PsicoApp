import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import doctorRoutes from './src/routes/doctorRoutes.js';
import usuarioRoutes from './src/routes/usuarioRoutes.js';
import citaRoutes from './src/routes/CitaRoutes.js';
import PacienteRoutes from './src/routes/PacienteRoutes.js';


let app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ result: 'OK'});
})

app.use("/doctors", doctorRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/cita", citaRoutes);
app.use("/paciente", PacienteRoutes);


export default app

