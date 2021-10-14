import fetch from "node-fetch"
 export const fetchPopular= async () => {
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

export const fetchUpComing= async () => {
    try {
        let response = await fetch(
            'https://api.themoviedb.org/3/movie/upcoming?api_key=c5c9bf47127665afb562db31becd9e75&language=fr-FR&page=1',
          )
          .then(res => res.json())
        return response
    } catch (error){
        console.error(error)
    };
}

 export const fetchTopRated= async () => {
    try {
        let response = await fetch(
            'https://api.themoviedb.org/3/movie/top_rated?api_key=c5c9bf47127665afb562db31becd9e75&language=fr-FR&page=1',
          )
          .then(res => res.json())
        return response
    } catch (error){
        console.error(error)
    };
}
export const fetchGenres= async () => {
    try {
        let response = await fetch(
            'https://api.themoviedb.org/3/genre/movie/list?api_key=c5c9bf47127665afb562db31becd9e75&language=fr-FR',
          )
          .then(res => res.json())
        return response
    } catch (error){
        console.error(error)
    };
}

export const fetchDetails= async (id) => {
    try {
        let response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=c5c9bf47127665afb562db31becd9e75&language=fr-FR`,
          )
          .then(res => res.json())
          console.log(response);
        return response
    } catch (error){
        console.error(error)
    };
}
