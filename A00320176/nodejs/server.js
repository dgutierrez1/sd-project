const express = require('express')
const app = express()
const os = require('os')
const PORT = 5000

app.get('/', (req, res) => res.send("<h1>Node.js App.  Enviado desde el host " + os.hostname() + "</h1>"))

app.listen(PORT, () => console.log("Aplicacion corriendo en el puerto " + PORT + "!" ))
