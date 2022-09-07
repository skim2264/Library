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
    newBookCard.style.display = "grid";

    document.querySelector('.book-cards').appendChild(newBookCard);
    newBookCard.style.display = "grid";
    newBookCard.querySelector('#bookTitle').innerHTML = this.title;
    newBookCard.querySelector('#bookAuthor').innerHTML = "by " + this.author;
    newBookCard.querySelector('#bookPages').innerHTML = this.pages + " pages";

    var readIcon = newBookCard.querySelector('.icon-btns .readImg');
    if (this.read) {
      readIcon.classList.add('filter-read');
    } else {
      readIcon.classList.remove('filter-read');
    }

    /* Add bookCard to the bookCardDiv */
    myLibrary.push(this.Book);
  }

}
/* Toggle book's read status */
function toggleRead(e) {
    e.target.classList.toggle('filter-read');
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
  var formread = document.getElementById("inputBookRead").checked;

  const newBook = new Book(formtitle, formauthor, formpages, formread);
  newBook.createBookCard();

  /* Clear form */
  document.getElementById("inputBookTitle").value = "";
  document.getElementById("inputBookAuthor").value = "";
  document.getElementById("inputBookPages").value = "";
  document.getElementById("inputBookRead").checked = false;

}


/* 

Event Listeners 

*/

/* Toggle book form visibility */
const addBook = document.getElementById("addBook");
addBook.addEventListener("click", toggleNewBookForm);

/* Create new book card */
const createBook = document.getElementById("bookForm");
createBook.onsubmit = formSubmit;

/* Toggle book's read status on click of icon */
document.addEventListener('click', function(e){
  if (e.target.classList.contains("readImg")|| e.target.parentElement.classList.contains("readImg")) {
    if (e.target.tagName == "BUTTON") {
      e.target.classList.toggle('filter-read');
    }
    else if (e.target.tagName = "IMG") {
      e.target.parentElement.classList.toggle('filter-read');
    }
  }
})

/* Delete book card on click of icon */
document.addEventListener('click', function(e){
  var myIndex = myLibrary.indexOf()
  if (e.target.classList.contains("binImg")) {
    e.target.parentElement.parentElement.remove();  
  } 
  else if (e.target.parentElement.classList.contains("binImg")) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
})