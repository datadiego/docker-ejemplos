const express = require('express'); //importamos libreria

const app = express(); //creamos la aplicacion

app.use(express.static("public")) //creamos una carpeta publica
app.use(express.urlencoded({ extended: true }))
let lista = ["test"]

app.get("/metodos", (req, res) => {
    console.log("Hola mundo!")
    res.send(lista)
})

app.post("/metodos", (req, res) => {
    lista.push(req.query)
    res.send(lista)
})

app.delete("/metodos", (req, res) => {
    lista = []
    res.send(lista)
})

app.get("/headers", (req, res) => {
    console.log(req.headers)
    res.send(req.headers)
})

app.get("/url_query", (req, res) => {
    const nombre = req.query.nombre
    const edad = req.query.edad
    const respuesta = {
        nombre,
        edad
    }
    res.json(respuesta)
})

app.post("/pregunta", (req, res) => {
    const respuestaUser = req.body.respuestaUser
    console.log(typeof(respuestaUser))
    if(respuestaUser === 2){
        res.send("Correcto")
    } else {
        res.send("Fallo")
    }
})

app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000")
})

