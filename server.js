const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const helmet = require('helmet');
const cors = require('cors');

const router = require('./network/routes');

// Iniciar el express
const app = express();

// Configuración
app.set('puerto', process.env.PORT || 3100);
app.use(express.json({limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

// Se usa helmet para darle seguridad a la API
app.use(helmet());

// Se agrega cors para que la API pueda ser consultada por las Apps
const rutasValidas = new RegExp(process.env.REACT_APP_AUTHORIGIN);
app.use(cors({
	credentials: true,
	origin: rutasValidas || "http://localhost:3000"
}));

// Rutas
router(app);

// Iniciar el servicio
app.listen(app.get('puerto'), () => {
	console.log(`Calculator-backend corriendo en la url: http://localhost:${app.get('puerto')}`);
});