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

// find Christmas greeting
// or greeting which contains "christmas"

let greetings = [
  'Happy Birthday!',
  'Merry Christmas my love',
  'A happy Christmas to all the family',
  "You're all I want for Christmas",
  'Get well soon',
];

greetings.forEach((greeting) => {
  if (greeting.indexOf('hristmas') !== -1) {
    insertListItem(greeting);
  }
});

// change city names so that they are all lower case
// except for a capital first letter.

let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

cities.forEach((city) => {
  let lowercaseCity = city.toLowerCase();
  let firstLetter = lowercaseCity.slice(0, 1);
  let newCity = lowercaseCity.replace(firstLetter, firstLetter.toUpperCase());
  insertListItem(newCity);
});

// extract the station code and name, and put them together in a string like
// MAN: Manchester Piccadilly

let stations = [
  'MAN675847583748sjt567654;Manchester Piccadilly',
  'GNF576746573fhdg4737dh4;Greenfield',
  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
  'SYB4f65hf75f736463;Stalybridge',
  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield',
];

stations.forEach((station) => {
  let stationCode = station.slice(0, 3);
  let indexofSemicolon = station.indexOf(';');
  let stationName = station.slice(indexofSemicolon + 1);
  let newStation = `${stationCode}:${stationName}`;
  insertListItem(newStation);
});

// string concatenation example 1
// output the result in para <p> inside <section>

let quoteStart = "Don't judge each day by the harvest you reap";
let quoteEnd = 'but by the Seeds that you Plant';
let finalQuote = quoteStart + ' ' + quoteEnd;
insertParaItem(finalQuote);

// string concatenation example 2
// output the result in para <p> inside <section>
let quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
let substring = 'green eggs and ham';
let quoteLength = quote.length;
let index = quote.indexOf(substring);
revisedQuote = quote.slice(0, index) + ' ' + substring + '.';

insertParaItem(`The quote is ${quoteLength} characters long.`);
insertParaItem(revisedQuote);

// string concatenation example 3
// output the result in para <p> inside <section>
let quote1 = 'I dO nOT lIke gREen eGgS anD HAM';
let lowercaseQuote = quote1.toLowerCase();
let camelcaseQuote = lowercaseQuote.replace(
  lowercaseQuote.slice(0, 1),
  lowercaseQuote.slice(0, 1).toUpperCase()
);
let newQuote = camelcaseQuote.replace('green eggs and ham', 'chicken') + '.';

insertParaItem(newQuote);

// string concatenation example 4
// output the result in para <p> inside <section>
let theorem = 'Pythagorean theorem';

let a = 5;
let b = 8;
let hypotenuse = Math.hypot(a, b).toFixed(2);

let myString =
  'Using *, we can work out that that if the two shortest sides of a right-angled triangle have lengths of * and *, the length of the hypotenuse is *.';

let mynewString = `${myString}`;

// mynewString = mynewString.replace(`*`, `${theorem}`);
// mynewString = mynewString.replace(`*`, `${a}`);
// mynewString = mynewString.replace(`*`, `${b}`);
// mynewString = mynewString.replace(`*`, `${hypotenuse}`);
mynewString = mynewString
  .replace(`*`, `${theorem}`)
  .replace(`*`, `${a}`)
  .replace(`*`, `${b}`)
  .replace(`*`, `${Math.hypot(a, b).toFixed(2)}`);
insertParaItem(mynewString);
