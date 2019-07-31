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

module.exports = Cinema;
