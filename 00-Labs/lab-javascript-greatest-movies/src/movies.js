// Iteration 1: All directors? - Get the array of all directors.

console.log("----------------------------");
console.log("Iteration 1: All directors");
console.log("----------------------------");

function getAllDirectors(movies) {
    const directors = movies.map((movie) => movie.director);
    return directors;
}

console.table(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

console.log("----------------------------");
console.log("Iteration 1.1: Clean the array directors");
console.log("----------------------------");

function getAllDirectorsFiltered(movies) {
    const directors = movies.map((movie) => movie.director);
    const directorsNoRepeat = directors.filter((director, index) => {
    return directors.indexOf(director) === index;
    return directorsNoRepeat;
    });
    return directorsNoRepeat;
}

console.table(getAllDirectorsFiltered(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

console.log("----------------------------");
console.log("Iteration 2: Steven Spielberg. The best?");
console.log("----------------------------");

const howManyMovies = (movies) => {
    const stevenMovies = movies.filter((movie) => {
        return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
  });
  return stevenMovies.length;
};

console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

console.log("----------------------------");
console.log("Iteration 3: All scores average");
console.log("----------------------------");

let totalScore = 0;
for (let i = 0; i < movies.length; i++) {
  totalScore += movies[i].score;
}
const scoresAverage = (totalScore / movies.length).toFixed(2);

console.log(`The average score is ${scoresAverage}`);

// Iteration 4: Drama movies - Get the average of Drama Movies

console.log("----------------------------");
console.log("Iteration 4: Drama movies");
console.log("----------------------------");

let totalDramaScore = 0;
let count = 0;

for (let i = 0; i < movies.length; i++) {
  if (movies[i].genre.includes("Drama")) {
    totalDramaScore += movies[i].score;
    count++;
  }
}

const dramaMoviesScore = (totalDramaScore / count).toFixed(2);

console.log(`The average score for Drama movies is ${dramaMoviesScore}`);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

console.log("----------------------------");
console.log("Iteration 5: Order by year");
console.log("----------------------------");

function orderByYear(movies) {
    // Creamos una copia del array original para no mutarlo
    const moviesCopy = movies.slice();
  
    moviesCopy.sort((a, b) => {
      // Comparamos las películas por año de estreno
      if (a.year !== b.year) {
        return a.year - b.year;
      }
  
      // Si las películas tienen el mismo año, las comparamos por título
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      }
  
      // Si las películas tienen el mismo título, no las ordenamos
      return 0;
    });
  
    return moviesCopy;
  }

  console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

console.log("----------------------------");
console.log("Iteration 6: Alphabetic order");
console.log("----------------------------");

function orderAlphabetically(movies) {
    // Creamos una copia del array original para no mutarlo
    const moviesCopy = movies.slice();
  
    // Ordenamos las películas alfabéticamente por su propiedad "title"
    moviesCopy.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  
    // Devolvemos solo los títulos de las primeras 20 películas (o todas las películas si hay menos de 20)
    return moviesCopy.slice(0, 20).map(movie => movie.title);
  }

  console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

console.log("----------------------------");
console.log("Iteration 7: Time format");
console.log("----------------------------");

function turnHoursToMinutes(movies) {
    // creamos un nuevo array para almacenar los objetos de película modificados
    return movies.map((movie) => {
      // obtenemos la duración de la película en formato hh 'h' mm 'min'
      const duration = movie.duration;
      
      // Convertimos la duración a minutos
      let durationInMinutes = 0;
      if (duration.includes("h")) {
        const hours = parseInt(duration.split("h")[0]);
        durationInMinutes += hours * 60;
      }
      if (duration.includes("min")) {
        const minutes = parseInt(duration.split(" ")[1]);
        durationInMinutes += minutes;
      }
      
      // Devolvemos el objeto actualizado
      return {
        title: movie.title,
        year: movie.year,
        director: movie.director,
        duration: durationInMinutes,
        genre: movie.genre,
        score: movie.score
      };
    });
  }

  console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

console.log("----------------------------");
console.log("Iteration 8: Best yearly score average");
console.log("----------------------------");

function bestYearAvg(movies) {
    if (movies.length === 0) {
      return null;
    }
    
    // objeto para almacenar los puntajes totales y las películas contadas por año
    const years = {};
    
    // iterar a través del array de películas y actualizar el objeto
    movies.forEach((movie) => {
      const year = movie.year;
      const score = movie.score;
      
      if (!years[year]) {
        years[year] = {
          totalScore: 0,
          count: 0
        };
      }
      
      years[year].totalScore += score;
      years[year].count++;
    });
    
    // calcular el puntaje promedio para cada año
    let bestYear;
    let bestRate = 0;
    
    for (const year in years) {
      const rate = years[year].totalScore / years[year].count;
      
      if (rate > bestRate || (rate === bestRate && year < bestYear)) {
        bestYear = year;
        bestRate = rate;
      }
    }
    
    // devolver el resultado en un string formateado
    return `The best year was ${bestYear} with an average score of ${bestRate.toFixed(2)}`;
  }