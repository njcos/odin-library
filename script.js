const myLibrary =[];
const titleInput = document.querySelector(".title")
const authorInput = document.querySelector(".author")
const pagesInput = document.querySelector(".pages")
const addButton = document.querySelector('.add-button')
const cardsSection = document.querySelector('.cards')


function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);
    myLibrary.push(book)

}



addButton.addEventListener('click', () => {
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value);
    createCard();
    clearInputs();
    
})

function clearInputs() {
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';

}

function createCard() {
    const newBook = document.createElement('p');
    for(let i = 0; i < myLibrary.length; i++) {
        newBook.textContent = `Title: ${myLibrary[i].title}, Author: ${myLibrary[i].author} Pages: ${myLibrary[i].pages}`
        cardsSection.appendChild(newBook)
    }

}