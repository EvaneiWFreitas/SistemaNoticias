import express from 'express'

//const express = require("express");
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World - Dev. Evanei Freitas')
})

app.listen(3000, () => {
  console.log('Servidor está rodando em http://localhost:3000')
})