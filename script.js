const myLibrary = [];
const titleInput = document.querySelector(".title");
const authorInput = document.querySelector(".author");
const pagesInput = document.querySelector(".pages");
const addButton = document.querySelector(".add-button");
const cardsSection = document.querySelector(".cards");
const newBook = document.querySelector(".newBook");
const addBook = document.querySelector(".add-book");
const close = document.querySelector(".close");

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

function addBookToLibrary(title, author, pages) {
  const book = new Book(title, author, pages);
  console.log(book);
  myLibrary.push(book);
}

close.addEventListener("click", () => {
  addBook.classList.remove("open");
});

newBook.addEventListener("click", () => {
  addBook.classList.add("open");
});

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    titleInput.validity.valid &&
    authorInput.validity.valid &&
    pagesInput.validity.valid
  ) {
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value);
    createCard();
    addBook.classList.remove("open");
    clearInputs();
  } else {
    alert("All fields are required");
  }
});

document.addEventListener("click", (e) => {
  const target = e.target.closest(".delete-book");

  if (target) {
    myLibrary.splice(parseInt(target.parentNode.id), 1);
    cardsSection.removeChild(target.parentNode);
    console.log(myLibrary);
  }
});

function clearInputs() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
}

function createCard() {
  const card = document.createElement("div");
  const newBookTitle = document.createElement("h2");
  const newBookAuthor = document.createElement("h2");
  const newBookPages = document.createElement("h2");
  const readDiv = document.createElement("div");
  const readTitle = document.createElement("h2");
  const read = document.createElement("input");
  read.type = "checkbox";
  readDiv.classList.add("read-div");
  const deleteBook = document.createElement("button");
  deleteBook.classList.add("delete-book");
  deleteBook.textContent = "Delete";

  for (let i = 0; i < myLibrary.length; i++) {
    newBookTitle.textContent = `Title: ${myLibrary[i].title}`;
    newBookAuthor.textContent = `Author: ${myLibrary[i].author}`;
    newBookPages.textContent = `Pages: ${myLibrary[i].pages}`;
    readTitle.textContent = "Read";
    readDiv.appendChild(readTitle);
    readDiv.appendChild(read);
    card.appendChild(newBookTitle);
    card.appendChild(newBookAuthor);
    card.appendChild(newBookPages);
    card.appendChild(readDiv);
    card.appendChild(deleteBook);
    card.classList.add("card");

    card.id = i;
    cardsSection.appendChild(card);
  }
  console.log(myLibrary);
}
