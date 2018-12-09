const MOVIES_LIST = [
  ["The Shawshank Redemption", 1994, true],
  ["The Godfather", 1972, true],
  ["The Dark Knight", 2008, true],
  ["Pulp Fiction", 1994, true],
  ["Goodfellas", 1990],
]

//ORIGINAL
const Movie = (title, year, watched = false) => {
  return {
    title,
    year,
    watched
  }
}
const CreateMovie = (element) => {
  return element.map(el => {
    return Movie(...el)
  })
}
const myMovies = CreateMovie(MOVIES_LIST)

//REFRACTORED
const Movie = (title, year, watched = false) => ({ title, year, watched })
const CreateMovie = element => element.map(el => Movie(...el) )
const myMovies = CreateMovie(MOVIES_LIST)
console.log(myMovies)
