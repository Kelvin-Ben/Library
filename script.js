const addBook = document.querySelector(".add-book");
const checkBoxLabel = document.querySelector("#checkboxLabel");
const form = document.querySelector(".form");
const submitBook = document.querySelector(".btn__submit");

const inputBook = document.getElementById("book");
const inputName = document.getElementById("name");
const inputPage = document.getElementById("pages");
const inputConfirm = document.getElementsByClassName("status");

const container = document.querySelector('.wrapper');


let myLibrary = [];
function addBookToLibrary(event) {
  event.preventDefault();
  // create book object
  const book = {
    title: inputBook.value,
    name: inputName.value,
    pages: inputPage.value,
    status: inputConfirm.value,
  };
  // Add book object to the array
  myLibrary.push(book);

  // generate book-card and append it to the container
  const bookCard = generateBookCard(book)
  container.appendChild(bookCard);
  inputBook.value = inputName.value = inputPage.value = inputConfirm.value = "";
}

function generateBookCard(book) {
    // Create card div
    const card = document.createElement("div");
    card.classList.add("card")
    
    // create card content div
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    
    // create title element
  const title = document.createElement("h2");
  title.classList.add("book-title");
  title.textContent = book.title

  // create author element
  const author = document.createElement("p");
  author.classList.add("author");
  author.textContent =`By ${book.name}`

  // create pages element
  const pages = document.createElement("p")
  pages.classList.add("pages")
  pages.textContent = `${book.pages} pages`

 
  // Append elements to cardContent div
  cardContent.appendChild(title)
  cardContent.appendChild(author)
  cardContent.appendChild(pages)
  cardContent.appendChild(removeBook)
  
  card.appendChild(cardContent);
  
  return card 
}
form.addEventListener("submit", addBookToLibrary);
