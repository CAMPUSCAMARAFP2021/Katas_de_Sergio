const { query } = require('express');
const express = require('express');
const app = express()
const port = 3000

app.listen(port, () => console.log(`Servidor escuchando en ${port}`))



const movieListHandler = (req,res) =>{
    const {query} = req.query
    const response = query 
        ? peliculas.filter((movie) => 
            movie.title.indexOf(query) > -1)
        : peliculas 
    res.json(response)
    //console.log(req.param.id)
}

const getMovieHandler =  (req,res) =>{
    const {id} = req.params
    res.send(findId(id))
}

const authentication = (req,res) =>{
    console.log('Pasas por aqui')
}


const peliculas = [
    { id: 1 , title:'Rey Leon'},
    {id: 2, title:'Soy Leyenda'},
    {id: 3, title:'La marca del demonio'},
    {id: 4, title: 'A todo gas'},
    {id:5, title:'Elrisas'},
    {id:6, title:'El Brujo'},
    {id:7, title:'Rey de la Montaña'},
    {id:8, title:'Soy el Rey del Mundo'}
]

const findId = (id) => 
        peliculas.find((movie)=>
        movie.id === +id
    )

app.get('/movie', authentication, movieListHandler)
app.get('/movie/:id', authentication, getMovieHandler)


