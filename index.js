const express = require('express');
const app = express()
const port = 4201
app.listen(port, () => console.log(`Servidor escuchando en ${port}`))



const handler = (req,res) =>{
    console.log('Soy un manejador')
    res.json({user:'pepe'})}

const handlerUserCreacion = (req,res) =>{
    req
    console.log('Soy un manejador')
    res.send('respuesta del manejador')}


app.get('/', handler)
app.get('/about', handler)