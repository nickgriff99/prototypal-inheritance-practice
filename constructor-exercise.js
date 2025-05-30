function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
}

Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}. It is a ${this.genre} book.`;
}

Book.prototype.isClassic = function() {
  const currentYear = new Date().getFullYear();
  return currentYear - this.year > 50;
}

Book.prototype.updateYear = function(newYear) {
  this.year = newYear;
  return `Publication year updated to ${this.year}`;
}

Book.prototype.changeGenre = function(newGenre) {
  this.genre = newGenre;
  return `Genre updated to ${this.genre}`;
}

// Example usage:
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");
console.log(book1.getSummary()); // "To Kill a Mockingbird was written by Harper Lee in 1960. It is a Fiction book."
console.log(book1.isClassic()); // true
console.log(book1.updateYear(1961)); // "Publication year updated to 1961"
console.log(book1.changeGenre("Historical Fiction")); // "Genre updated to Historical Fiction"
