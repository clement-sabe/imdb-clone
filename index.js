
import express from "express"
const app = express()
import fetchPopular from "./fetchMovies.js"

import handlebars from "express-handlebars"
var hbs = handlebars.create()
app.engine("handlebars", hbs.engine)
app.set('view engine', 'handlebars');

 app.use(express.static('public'))


app.get('/', function (req, res) {
   var result= fetchPopular().then(res=>{
      console.log(res);
   })
   console.log(result); 
   res.render('main', {layout : 'index'})
    
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