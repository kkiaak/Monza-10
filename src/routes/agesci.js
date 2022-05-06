const express = require('express');
const mzRouter = express.Router();
const axios = require('axios');

mzRouter.get('', async(req,res) => {
    res.render('home')
})

mzRouter.get('/scautismo.ejs', async(req,res) => {
    res.render('scautismo')
})

mzRouter.get('/Mz.ejs', async(req,res) => {
    res.render('Mz')
})

mzRouter.get('/unita.ejs', async(req,res) => {
    res.render('unita')
})

mzRouter.get('/branco.ejs', async(req,res) => {
    res.render('branco')
})

mzRouter.get('/reparto.ejs', async(req,res) => {
    res.render('reparto')
})

mzRouter.get('/clan.ejs', async(req,res) => {
    res.render('clan')
})

mzRouter.get('/capi.ejs', async(req,res) => {
    res.render('capi')
})

mzRouter.get('/contatti.ejs', async(req,res) => {
    res.render('contatti')
})

mzRouter.get('/documenti.ejs', async(req,res) => {
    res.render('documenti')
})

mzRouter.get('/login.ejs', async(req,res) => {
    res.render('login')
})


 

module.exports = mzRouter;