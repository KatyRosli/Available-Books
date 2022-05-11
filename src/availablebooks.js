class Book {
    constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
}

get availability() {
    return this.getAvailability();
  }

getAvailability (){
    if (this.numCopies === 0) {
        return "Out of stock";
    } else if (this.numCopies <10) {
        return "Low in stock"
    }
    return "In stock";
}

sell = function(numCopiesSold = 1){
    this.numCopies -= numCopiesSold;
}

restock = function(numCopiesStocked = 5){
    this.numCopies += numCopiesStocked;
}
}

const HarryPotter = new Book("Harry Potter", "JK Rowling", 123456, 5);
console.log(HarryPotter.availability);
HarryPotter.restock(12);
console.log(HarryPotter.availability);
HarryPotter.sell(17);
console.log(HarryPotter.availability);