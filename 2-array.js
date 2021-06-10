// selecting ul from HTML and setting it empty
// and insert li items inside on invoking a function
const listHeader = document.querySelector('ul');
listHeader.innerHTML = '';
const insertListItem = (item) => {
  let listItem = document.createElement('li');
  listItem.textContent = item;
  listHeader.appendChild(listItem);
};
//selecting section from HTML and setting it empty
// insert para <p> items inside on invoking a function
const sectionHeader = document.querySelector('section');
sectionHeader.innerHTML = ' ';
const insertParaItem = (item) => {
  let paraItem = document.createElement('p');
  paraItem.textContent = item;
  sectionHeader.appendChild(paraItem);
};

// basics
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
// console.log(myArray, myArray.push('cardiff'));
// console.log(myArray, myArray.pop());
// console.log(myArray, myArray.unshift('John'));
// console.log(myArray, myArray.shift('John'));

// exercise 1
// split array and print item-price
// calculate total price

let total = 0;
const rupee = '\u20B9';
let products = [
  'Underpants:6.99',
  'Socks:5.99',
  'T-shirt:14.99',
  'Trousers:31.99',
  'Shoes:23.99',
];

products.forEach((product) => {
  item = product.split(':')[0];
  price = product.split(':')[1];
  total += Number(price);

  insertParaItem(`${item} - ${rupee}${price}`);
});
insertParaItem(`total - ${total.toFixed(2)}`);

//exercise 2

let randString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';

let myrandArray = randString.split('+');
console.log(myrandArray);
insertParaItem(
  `Names of ${myrandArray.length} person, 
  last person's name - ${myrandArray[myrandArray.length - 1]}`
);
