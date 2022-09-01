let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    }

  createBookCard() {
    /* Hide book form */ 
    document.getElementById("bookForm").style.display = "none";
    /* Create the book card and fill in information */
    const bookCardTemplate = document.querySelector('.book-card-template');
    const newBookCard = bookCardTemplate.cloneNode(true);
    document.querySelector('.book-cards').appendChild(newBookCard);
    newBookCard.style.display = "grid";
    newBookCard.querySelector('#bookTitle').innerHTML = this.title;
    newBookCard.querySelector('#bookAuthor').innerHTML = "by " + this.author;
    newBookCard.querySelector('#bookPages').innerHTML = this.pages + " pages";
    newBookCard.querySelector('#bookRead').innerHTML = this.read;

    /* Add bookCard to the bookCardDiv */
    bookCardDiv.appendChild(newbookCard);
    myLibrary.push(this.Book);
  }

  removeBookFromLibrary() {

  }

  toggleRead() {

  }
}

/* Make book form visible */
function toggleNewBookForm() {
  document.getElementById("bookForm").style.display = "flex";
  
}

/* Retrieve data from new book form and create a new Book upon clicking add book button*/
function formSubmit(event) {
  event.preventDefault();
  var formtitle = document.getElementById("inputBookTitle").value;
  var formauthor = document.getElementById("inputBookAuthor").value;
  var formpages = document.getElementById("inputBookPages").value;
  var formread = document.getElementById("inputBookRead").value;

  const newBook = new Book(formtitle, formauthor, formpages, formread);
  newBook.createBookCard();

}

/* 

Event Listeners 

*/

/* Toggle book form visibility */
const addBook = document.getElementById("addBook");
addBook.addEventListener("click", toggleNewBookForm);

/* Create new book card */
const createBook = document.getElementById("createBook");
createBook.addEventListener("click", formSubmit);


