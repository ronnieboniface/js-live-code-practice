const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const movieList = [];

const fetchMovies = () => {
  fetch('https://ghibliapi.herokuapp.com/films')
  .then(resp => resp.json())
  .then(movies => movies.forEach(movie => movieList.push(movie)))
};

fetchMovies();