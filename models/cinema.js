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

module.exports = Cinema;
