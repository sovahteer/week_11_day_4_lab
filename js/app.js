document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const textSubmit = document.querySelector('#new-item-form');
    textSubmit.addEventListener('submit', handleFormSubmit);

  const resetButton = document.querySelector('#delete-all');
    resetButton.addEventListener('click', handleButtonClick);
})

const handleFormSubmit = function(event){
  event.preventDefault()
  const newListItem = document.createElement('li');
  newListItem.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`;
  const list = document.querySelector('ul');
  list.appendChild(newListItem);
  document.getElementById("new-item-form").reset();
}

const handleButtonClick = function(){
  const list = document.querySelector('ul');
  const listItem = document.getElementsByTagName('li');
  list.removeChild(listItem);
}

// function removeAll(){
//   const li = document.getele
// }
