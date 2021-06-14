fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => {
  return response.json()


  })

  .then(data => {


    const moviesDiv = document.getElementById('container')

    data.forEach(movie => {
      let movieDiv = document.createElement('div')
      movieDiv.classList.add('container')
      movieDiv.innerHTML = '<div class="title">' + movie.title + '</div>' + '<div class="desc">' + movie.description + '</div>'
      moviesDiv.append(movieDiv)

    });

  })
