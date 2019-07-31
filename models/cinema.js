const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  const titleArray = [];
  this.films.map((item) => {
    titleArray.push(item.title);
  })
  return titleArray;
};

Cinema.prototype.findFilmByTitle = function (filmTitle) {
  const result = this.films.filter((film) => {
    return film.title === filmTitle;
  })
  return result;
};

Cinema.prototype.findFilmByGenre = function (filmGenre) {
  const result = this.films.filter((film) => {
    return film.genre === filmGenre;
  })
  return result;
}

Cinema.prototype.filmExistsByYear = function (filmYear) {
  const result = this.films.some((film) => {
    return film.year === filmYear;
  });
  return result;
}

Cinema.prototype.filmLength = function (filmLength) {
  const result = this.films.every ((film) => {
    return film.length > filmLength;
  });
  return result;
}

Cinema.prototype.filmsTotalLength = function (){
  const result = this.films.reduce ((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0 );
  return result;
}

Cinema.prototype.filmsByProperty = function (name, value) {
  const result = this.films.filter((film) => {
    return film[name] === value;
  })
  return result;
}

module.exports = Cinema;
