const express = require ('express');
const server = express();
const editals = require ('./src/data/edital.json');
const hotNews = require ('./src/data/hotNews.json');
const generalNews = require ('./src/data/generalNews.json');

server.get('/editals', (req,res) => {
    return res.json(editals)
});

server.get('/hotNews', (req,res) =>{
    return res.json(hotNews)
});

server.get('/generalNews', (req,res) =>{
    return res.json(generalNews)
});

server.listen(3000, () => {
    console.log ('Server is running...')
});