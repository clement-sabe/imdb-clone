const search = document.getElementById('search')
search.addEventListener('keyup', function () {
    const searchResults = document.getElementById('searchResults')
    searchResults.innerHTML = ''
    var input = this.value
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=c5c9bf47127665afb562db31becd9e75&query=${input}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.results.map(item => {
                searchResults.innerHTML += 
                // `<div>${item.title}</div>`
                // `<a href="http://localhost:3000/details/${item.id}"><img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt=""></a>`
                `<div>
                  <a href="http://localhost:3000/details/${item.id}"><img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt=""></a>                 
                </div>`
                
                
            })
        })
})