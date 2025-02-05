const myLibrary =[];
const titleInput = document.querySelector(".title")
const authorInput = document.querySelector(".author")
const pagesInput = document.querySelector(".pages")
const addButton = document.querySelector('.add-button')


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
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    console.log(myLibrary)
})


