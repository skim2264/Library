let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    }

  createBookCard() {
    /* Create Div for new Book Card and append to library */
    const bookCardDiv = document.createElement('div');
    document.querySelector('.book-cards').appendChild(bookCardDiv);

    /* Create the book card and fill in information */
    const bookCardTemplate = document.querySelector('.book-card');
    const newBookCard = bookCardTemplate.textContent;
    newBookCard.querySelector('#bookTitle').innerHTML = this.title;
    newBookCard.querySelector('#bookAuthor').innerHTML = this.author;
    newBookCard.querySelector('#bookPages').innerHTML = this.pages;
    newBookCard.querySelector('#bookRead').innerHTML = this.read;

    /* Add bookCard to the bookCardDiv */
    bookCardDiv.appendChild(newbookCard);
    myLibrary.push(this.Book);
  }

  displayBooks() {

  }

  removeBookFromLibrary() {

  }

  toggleRead() {

  }
}

/* Make book form visible */
function toggleNewBookForm() {
  document.getElementById("bookForm").style.display = "block";
  
}

/* 

Event Listeners 

*/

/* Toggle book form visibility */
const createBook = document.getElementById("addBook");
createBook.addEventListener("click", toggleNewBookForm);

/* Create a new Book upon clicking button */
const newBook = document.getElementById("createBook");
newBook.addEventListener("click", createBookCard());