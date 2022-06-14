const express = require ('express');
const server = express();
const editals = require ('./src/data/edital.json');
const hotNews = require ('./src/data/hotNews.json');
const generalNews = require ('./src/data/0generalNews.json');
const bannersURL = require ('./src/data/bannersURL.json');
const generalsnews1 = require ('./src/data/1generalNews.json')
const PORT = process.env.PORT || 3000;

server.get('/', (req,res) => {
    return res.json({
        teste: 'OK'
    })
})

server.get ('/bannersURL', (req, res) => {
    return res.json(bannersURL)
})

server.get('/editals', (req,res) => {
    return res.json(editals)
});

server.get('/hotNews', (req,res) =>{
    return res.json(hotNews)
});

server.get('/0generalNews', (req,res) =>{
    return res.json(generalNews)
});

server.get('/1generalNews', (req,res) =>{
    return res.json(generalNews1)
});

server.listen(PORT, () => {
    console.log ('Server is running...')
});