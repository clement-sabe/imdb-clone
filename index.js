import express, {
   response
} from "express"

import livereload from "livereload";
import connectLiveReload from "connect-livereload";


const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
   setTimeout(() => {
      liveReloadServer.refresh("/");
   }, 100);
});

const app = express()

app.use(connectLiveReload());

import 
   {fetchPopular, fetchUpComing, fetchTopRated, fetchGenres, fetchDetails}from "./fetchMovies.js"
import handlebars from "express-handlebars"

var hbs = handlebars.create()
app.engine("handlebars", hbs.engine)
app.set('view engine', 'handlebars');

app.use(express.static('public'))


app.get('/', async function (req, res) {
   var result = await fetchPopular().then(response => {
      return response
   })
   
   // // result.results.map( async item=>{
   // //    const id=item.id
   // //    await fetchVideos(id).then(response =>{
   // //      response.id
   // //    })

   // })
  
   var topRatedResults = await fetchTopRated().then(response => {
      return response
   })
   var upComingResults = await fetchUpComing().then(response => {
      return response
   })
   var data = {
      firstPopular: result.results[0],
      popular: result.results.splice(1),
      topRated: topRatedResults,
      upComing: upComingResults,
   }
   res.render('main', {
      layout: 'index',
      data: data
   })
})
app.get('/contact', function (req, res) {

   res.render('contact', {
      layout: 'index'
   })
})
app.get('/topRated', async function (req, res) {
   var topRatedResults = await fetchTopRated().then(response => {
      return response
   })
   var genresResults = await fetchGenres().then(response => {
      return response
   })
   var data = {
      topRated: topRatedResults,
      genres: genresResults
   }
   console.log(data.topRated);
   res.render('topRated', {
      layout: 'index',
      data: data
   })
})
app.get('/upComing', async function (req, res) {
   var upComingResults = await fetchUpComing().then(response => {
      return response
   })
   res.render('upComing', {
      layout: 'index',
      data: upComingResults
   })
})
app.get('/popularity', async function (req, res) {
   var result = await fetchPopular().then(response => {
      return response
   })
   res.render('popularity', {
      layout: 'index',
      data: result
   })
})


app.get('/details/:id', async function (req,res){
const id = req.params.id
   var details = await fetchDetails(id).then(response => {
      return response
   })
   if (details.videos.results[0]){
   var data ={
      details: details,
      key: details.videos.results[0].key
   }
}
else{
   var data={details:details}
}
   res.render('details', {
      layout:'index',
      data: data,
   })
});

app.listen(3000, function () {
   console.log('Votre app est disponible sur localhost:3000 !')
})