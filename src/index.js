const express = require('express');
const app = express();

//Configuración 
app.set('port', process.env.PORT || 3001);

//Middlewares
app.use(express.json());

//Rutas
app.use(require('./rutas/employees'));

//Empezar el servidor

app.listen(app.get('port'), () =>{
    console.log('Server on port ', app.get('port'));
});