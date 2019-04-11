# Movies!

## The Basics

### (1)

- Declare a constant called `MOVIES` that imports the data array from `data.js`

### (2)

- Create a function called searchMoviesByDirector.
- This function should take two arguments. An array (our movies data), and a string (the director's name)
- The function should filter through the array returning only movies directed by the specified director
- The letter casing for the directors name should be ignored, but the spelling should not!

### (3)

- Create a function called searchMoviesByGenre
- This function should take two arguments. An array (our movies data), and a string (the desired genre)
- The function should filter through the array returning only movies where at least one genre matches the desired genre

### (4)

- Create a function called searchMoviesByGenres
- This function should take two arguments. An array (our movies data), and a second array (the desired genres)
- The function should filter through the array returning only movies where the genre matches ALL of the genres in the array that was passed in

## Heating up

### (1)

- Create a function called sortMoviesAlphabetically
- This function should take an array (our movies data) as an argument.
- The function should sort through the array and organize the moves alphabetically
- Once you've sorted the movies, you should loop through the array again, and return only an array of titles
- As an additional challenge, lets return only the first twenty movies

### (2)

- Create a function called groupMoviesByYear
- This function should take an array (our movies data) as an argument
- The function should loop through the array and return an OBJECT, where each key represents a year, and the value should be an array of movies released that year

### (3)

- Create a function called getAverageRating
- This function should take an array of movies as an argument.
- The array can either be all of the movies, movies by a specific director, movies for a specific year, it shouldn't matter
- The function will then loop through the array, and return the average of all the ratings
- If the array is empty, the function should return undefined
- Test that this function works by passing it (a) An array of movies directed by a director of your choice, (b) An array of drama movies, (c) The entire movies from 1990
- NOTE: Some movies may not have a rating, to make things easier, you can assume the rating is just 0 for these movies.

## Hard mode

### (1)

- Create a function called convertDurationToMinutes
- This function should take an array of movies as an argument. This can be the entire movies data, movies by a specific director, movies of a specific genre, it shouldn't matter
- The function should loop through the array, converting the duration property of each movies into minutes
- You may notice that some durations are already in minutes and that some are strings, while some are integers. This is not a mistake. Your code should take this into account!
- This function should return the entire array with each movie's duration converted into minutes

### (2)

- Create a function called sortMoviesByDuration
- This function should take an array (our movies data) as an argument
- The function should invoke your newly created `convertDurationToMinutes` function and pass in the movies array. (Its best to store this new array in a variable)
- Once your function has successfully converted all the duration to minutes, sort the array in ascending order (shortest -> longest)

## Just a bonus

- This last challenge will require you to use multiple functions that were created in the previous steps. So please make sure you finish everything before attempting this one.
- Create a function called getBestYear
- This function should take an array (our movies data) as an argument
- The function should organize the movies by year (Hint: You have a function that can do this!)
- Once the movies are organized by years, you should loop through it, and calculate the average for each year (Hint: You have a function that can do this!)
- Finally the function should return a string "The best year was \_**\_, with an average rating of \_\_**."
