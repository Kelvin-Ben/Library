const addBook = document.querySelector("#add-book");
const section2 = document.querySelector(".section2__hidden");
const showForm = document.querySelector(".container");
const checkbox = document.querySelector(".mycheckbox");
const checkBoxLabel = document.querySelector("#checkboxLabel");
const form = document.querySelector(".form");
const submitBook = document.querySelector(".btn__submit");

const inputBook = document.getElementById("book");
const inputName = document.getElementById("name");
const inputPage = document.getElementById("pages");
const inputConfirm = document.getElementById("confirm");


document.addEventListener("click", function (event) {
  if (!section2.contains(event.target) && event.target !== addBook) {
  section2.classList.add("section2__hidden");
  }
});
// there is a problem with this event
// addBook.addEventListener("click", function () {
//   section2.classList.toggle("section2__hidden");
//   section2.classList.toggle("section__2");
//   console.log("clicked");
// });
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    checkBoxLabel.textContent = "Yes";
  } else {
    checkBoxLabel.textContent = "No";
  }
});

function hideForm() {
   // clear the form after submit
   inputBook.value = inputName.value = inputPage.value = "";
}

let myLibrary = [];
// function Book() {

// }
function addBookToLibrary(event) {
  event.preventDefault();

  // create book object
  const book = {
    title: inputBook.value,
    name: inputName.value,
    page: inputPage.value,
    isRead: inputConfirm.value,
  };

 
  // Add book object to the array
  myLibrary.push(book);
  console.log(myLibrary);
  // hideForm()
}
form.addEventListener("submit", addBookToLibrary);
