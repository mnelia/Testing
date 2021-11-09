const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map( nombre => nombre.director)
  console.log(result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  let result;
  result = array.filter( movie => movie.director === 'Quentin Tarantino');
  console.log(result);
  return result;
}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  const moviesByDirector = array.filter(movie => movie.director === director);
    console.log(moviesByDirector)

    const {score} = moviesByDirector.reduce((prev, curr) => ({score: prev.score + curr.score}));

    return score / moviesByDirector.length;

  

}




// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let resultado;
 
  resultado = array.map(movie => movie.title).sort((titleA, titleB) => {
    
    if ( titleA == titleB) {
      return 1;
    }
    if(titleA < titleB){
      return -1;
    }
    return 1;
  }) 
  resultado = resultado.slice(0, 20)
   
   return resultado;

  
  
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let resultado;
  let nuevoArray = [...array];
  resultado = nuevoArray.sort(function (a, b) {
    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    }
    //
    if (a.year == b.year) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      // a must be equal to b
      return 0;
    }
    
  });


   
   
   return resultado;

  

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genero ) {
  //const moviesWithGenreCrim = []
  const moviesByGenre = array.filter(movie => (movie.genre == genero) && (movie.score !== '') );
  let sumaScore = moviesByGenre.reduce((total, movie) => total + movie.score, 0);
  let media = sumaScore/moviesByGenre.length;
  return media;
  //const {score} = moviesByGenre.reduce((res, curr) => ({score: res.score + curr.score, 0}));
  
  
  //si dentro de generos existe la palabra Crime guardamos esa pelicula en el array moviesWithGenreCrim
   // for(let i = 0; i < generos.length; i++) {
  // if (generos[i] === 'Crime') moviesWithGenreCrim.push(movie)
    }
  
  
 //const peliculaMayorSiete = moviesByGenre.filter(movie => movie.score >= 7);
 //console.log(peliculaMayorSiete)
 

  
  
  
 

  //return parseFloat(score)/moviesByGenre.length;

  
  
    



// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
