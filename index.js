import express from 'express'

//const express = require("express");
const app = express()

app.get('/soma', (req, res) => {
    const soma = 100 + 1;
    res.send({soma: soma})
})

app.listen(3000, () => {
  console.log('Servidor está rodando em http://localhost:3000')
})