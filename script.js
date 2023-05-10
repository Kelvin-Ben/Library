const addBook = document.querySelector('.add-book');
const showForm = document.querySelector('.container')

addBook.addEventListener('click', function() {
  showForm.classList.add('visible')
  // showForm.classList.remove('visible');
})

const checkbox = document.querySelector('.mycheckbox')
const checkBoxLabel = document.querySelector('#checkboxLabel');

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    checkBoxLabel.textContent = "Yes";
  } else {
    checkBoxLabel.textContent = "No"
  }
});