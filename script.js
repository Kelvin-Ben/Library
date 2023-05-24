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

// there is a problem with this event
addBook.addEventListener("click", function () {
  section2.classList.add("section__2");
  section2.classList.remove("section2__hidden");
  showForm.classList.add("form__container");
  console.log("clicked");
});
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
  section2.classList.add("section2__hidden");
  showForm.style.opacity = 0;
}

let myLibrary = [];
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
  hideForm();
}
form.addEventListener("submit", addBookToLibrary);
