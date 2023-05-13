const addBook = document.querySelector('.add-book');
const section2 = document.querySelector('.section__2')
const showForm = document.querySelector('.container')
const checkbox = document.querySelector('.mycheckbox')
const checkBoxLabel = document.querySelector('#checkboxLabel');
const form = document.querySelector('.form')

const inputBook = document.getElementById('book');
const inputName = document.getElementById('name');
const inputPage = document.getElementById('pages');
const inputConfirm = document.getElementById('confirm');




document.addEventListener('click', function(event) {
  if (!section2.contains(event.target) && event.target !== addBook) {
    section2.style.display = 'none'
  }
})

addBook.addEventListener('click', function() {
  section2.style.display = 'flex'
  console.log("clicked");
})
checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    checkBoxLabel.textContent = "Yes";
  } else {
    checkBoxLabel.textContent = "No"
  }
});
let myLibrary = [];
function Book() {

}
function addBookToLibrary(event) {
  event.preventDefault();

  // create user object
const book = {
  title: inputBook.value,
  name: inputName.value,
  page: inputPage.value,
  isRead: inputConfirm.value
};

// clear the form after submit
inputBook.value = ''
inputName.value = ''
inputPage.value = ''
// Add book object to the array
myLibrary.push(book);
console.log(myLibrary)
}
form.addEventListener('submit', addBookToLibrary)