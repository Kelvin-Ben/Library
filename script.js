const addBook = document.querySelector(".add-book");
const checkBoxLabel = document.querySelector("#checkboxLabel");
const form = document.querySelector(".form");
const submitBook = document.querySelector(".btn__submit");

const inputBook = document.getElementById("book");
const inputName = document.getElementById("name");
const inputPage = document.getElementById("pages");
const inputConfirm = document.querySelector("#status");

const container = document.querySelector(".wrapper");

let myLibrary = [];
function addBookToLibrary(event) {
  event.preventDefault();
  // create book object
  const book = {
    title: inputBook.value,
    name: inputName.value,
    pages: inputPage.value,
    status: inputConfirm.checked,
  };
  // Add book object to the array
  myLibrary.push(book);

  // generate book-card and append it to the container
  const bookCard = generateBookCard(book, myLibrary.length - 1);
  container.appendChild(bookCard);
  inputBook.value = inputName.value = inputPage.value = "";
}

function generateBookCard(book, index) {
  // Create card div
  const card = document.createElement("div");
  card.classList.add("card");
  card.id = `card-${index}`;

  // create card content div
  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  // create title element
  const title = document.createElement("h2");
  title.classList.add("book-title");
  title.textContent = book.title;

  // create author element
  const author = document.createElement("p");
  author.classList.add("author");
  author.textContent = `By ${book.name}`;

  // create pages element
  const pages = document.createElement("p");
  pages.classList.add("pages");
  pages.textContent = `${book.pages} pages`;

  // create a div to have the buttons
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("buttonDiv");

  // create a button to remove each book
  const removeBook = document.createElement("button");
  removeBook.classList.add("remove-btn");
  removeBook.textContent = "Remove";

  // Add eventListener to the button
  removeBook.addEventListener("click", () => {
    removeBookFromLibrary(index);
    card.remove();
  });
  // create a p element where the status will be displayed
  const readStatus = document.createElement("span");
  readStatus.classList.add("read-status");
  readStatus.textContent = book.status ? "Read" : "Not Read";
  // Add a button to check read status
  const readStatusButton = document.createElement("button");
  readStatusButton.classList.add("read-status-button");
  // readStatusButton.textContent = "Toggle";
  // create eventListener for the button
  readStatusButton.addEventListener("click", () => {
    toggleReadStatus(index);
    console.log("cliked");
  });

  buttonDiv.appendChild(removeBook);
  buttonDiv.appendChild(readStatusButton);
  readStatusButton.appendChild(readStatus);

  // Append elements to cardContent div
  cardContent.appendChild(title);
  cardContent.appendChild(author);
  cardContent.appendChild(pages);
  cardContent.appendChild(buttonDiv);
  // cardContent.appendChild(removeBook)
  // cardContent.appendChild(readStatusButton);

  card.appendChild(cardContent);

  return card;
}
function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1);
}
function toggleReadStatus(index) {
  const book = myLibrary[index];
  book.status = !book.status;

  const card = document.querySelector(`#card-${index}`);
  const readStatusElement = card.querySelector(".read-status");
  readStatusElement.textContent = book.status ? "Read" : "Not Read";
}
form.addEventListener("submit", addBookToLibrary);
