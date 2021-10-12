const express = require('express')
const app = express()

const handlebars = require('express-handlebars')

app.set('view engine', 'handlebars')
app.engine('handlebars', handlebars({
 layoutsDir: __dirname + '/views/layouts',
}))

 app.use(express.static('public'))


app.get('/', function (req, res) {
    res.render('main', {layout : 'index'})
    
 })
<<<<<<< HEAD
 app.get('/contact', function (req, res) {
    res.render('contact', {layout : 'index'})
})
=======
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

>>>>>>> 2503f1a8aa807bb54bea8526bd1453e3caa8e607

app.listen(3000, function () {
    console.log('Votre app est disponible sur localhost:3000 !')
   })