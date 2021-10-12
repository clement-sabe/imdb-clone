import fetch from "node-fetch"
const fetchPopular= async () => {
    try {
        let response = await fetch(
            'https://api.themoviedb.org/3/movie/popular?api_key=c5c9bf47127665afb562db31becd9e75&language=fr-FR&page=1',
          )
          .then(res => res.json())
        return response
    } catch (error){
        console.error(error)
    };
}
export default fetchPopular
    