const { MOVIES } = require('./data');

const convertDurationToMinutes = moviesToConvert =>
  moviesToConvert.map(movie => {
    let totalMin = 0;
    let totalHr = 0;
    movie.duration.split(' ').forEach(time => {
      if (time.includes('h')) totalHr = parseInt(time.replace('h', '')) * 60;
      if (time.includes('min')) totalMin = parseInt(time.replace('min', ''));
    });
    const duration = totalHr + totalMin;
    return { ...movie, duration };
  });

const getAverageRating = moviesToRate => moviesToRate.reduce((acc, movie) => acc + movie.rate, 0) / moviesToRate.length;

const searchMoviesByDirector = (moviesToSearch, director) =>
  moviesToSearch.filter(movie => movie.director.includes(director));

const searchMoviesByGenre = (moviesToSearch, genre) => moviesToSearch.filter(movie => movie.genre.includes(genre));

const searchMoviesByGenres = (moviesToSearch, genres) =>
  moviesToSearch.filter(movie => genres.every(genre => movie.genre.includes(genre)));

const sortMoviesByDuration = moviesToSort =>
  convertDurationToMinutes(moviesToSort).sort((a, b) => a.title.localeCompare(b.title));

const sortMoviesAlphabetically = moviesToSort =>
  moviesToSort
    .sort((a, b) => a.title.localeCompare(b.title))
    .map(movie => movie.title)
    .slice(0, 20);

const groupMoviesByYear = moviesToGroup =>
  moviesToGroup.reduce((acc, movie) => {
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
