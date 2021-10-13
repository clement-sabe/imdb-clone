
import express from "express"

import livereload from "livereload";
import connectLiveReload from "connect-livereload"

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const app = express()

app.use(connectLiveReload());

import fetchPopular from "./fetchMovies.js"


import handlebars from "express-handlebars"
var hbs = handlebars.create()
app.engine("handlebars", hbs.engine)
app.set('view engine', 'handlebars');

 app.use(express.static('public'))


app.get('/', async function (req, res) {
   var result= await fetchPopular().then(response=>{
      return response
   })
   // console.log(result);
   res.render('main', {layout : 'index', data:result})
})
app.get('/contact', function (req, res) {

    res.render('contact', {layout : 'index'})
 })
 app.get('/topRated', function (req, res) {
    res.render('topRated', {layout : 'index'})
 })
 app.get('/upComing', function (req, res) {
    res.render('upComing', {layout : 'index'})
 })
 app.get('/popularity', function (req, res) {
    res.render('popularity', {layout : 'index'})
 })


app.listen(3000, function () {
    console.log('Votre app est disponible sur localhost:3000 !')
   })