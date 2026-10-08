const express = require("express") //fazendo o import
const app = express() //executando a função
const ejs = require("ejs") //exibir
const nodemon = require("nodemon") //conectar
const mongodb = require("mongodb")
const dotenv = require("dotenv")


app.listen(3000,function(){
    console.log("Servidor rodando na porta 3000")
})

app.get("/ler", (request, response)=>{
    response.send("Olá, mundo!")
})
