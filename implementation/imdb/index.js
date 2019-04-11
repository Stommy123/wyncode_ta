const { MOVIES } = require('./data');

const convertDurationToMinutes = movies =>
  movies.map(movie => {
    let duration = movie.duration;
    let totalMin = 0;
    let totalHr = 0;
    if (typeof movie.duration === 'string') {
      movie.duration.split(' ').forEach(time => {
        if (time.includes('h')) totalHr = parseInt(time.substr(0, time.indexOf('h'))) * 60;
        if (time.includes('min')) totalMin = parseInt(time.replace('min', ''));
      });
      duration = totalHr + totalMin;
    }
    return { ...movie, duration };
  });

const getAverageRating = movies =>
  movies.length ? movies.reduce((acc, x) => acc + (parseFloat(x.rate) || 0), 0) / movies.length : undefined;

const searchMoviesByDirector = (movies, director) => movies.filter(movie => movie.director.includes(director));

const searchMoviesByGenre = (movies, genre) => movies.filter(movie => movie.genre.includes(genre));

const searchMoviesByGenres = (movies, genres) =>
  movies.filter(movie => genres.every(genre => movie.genre.includes(genre)));

const sortMoviesByDuration = movies =>
  convertDurationToMinutes(movies.sort((a, b) => (a.duration > b.duration ? 1 : -1)));

const sortMoviesAlphabetically = movies => {
  const sortedMovies = movies.sort((a, b) => (a.title > b.title ? 1 : -1));
  return sortedMovies.map(movie => movie.title).slice(0, 20);
};

const groupMoviesByYear = movies =>
  movies.reduce((acc, movie) => {
    acc[movie.year] = acc[movie.year] || [];
    acc[movie.year].push(movie);
    return acc;
  }, {});

const getBestYear = movies => {
  const moviesByYear = groupMoviesByYear(movies);
  const bestAverage = Object.keys(moviesByYear).reduce(
    (acc, year) => {
      const average = getAverageRating(moviesByYear[year]);
      return acc.average > average ? acc : { year, average };
    },
    { year: Number(), average: Number() }
  );
  return `The best year was ${bestAverage.year} with an average rate of ${bestAverage.average}`;
};
