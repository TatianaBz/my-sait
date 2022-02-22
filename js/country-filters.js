
const countriesList = document.querySelector('.countries__list');
const countLists = countriesList.querySelectorAll('li');
const countriesDds = document.querySelector('.countries__dl');
const countDd = countriesDds.querySelectorAll('li');

for (let count of countLists){
  console.log (count.classList.item(0));
}