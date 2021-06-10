const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}
let storyText =
  'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = 'Willy the Goblin,Big Daddy,Father Christmas';
let insertY = 'the soup kitchen,Disneyland,the White House';
let insertZ =
  'spontaneously combusted,melted into a puddle on the sidewalk,turned into a slug and crawled away';

randomize.addEventListener('click', result);
function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX.split(','));
  let yItem = randomValueFromArray(insertY.split(','));
  let zItem = randomValueFromArray(insertZ.split(','));

  while (newStory.indexOf(':insertx:') !== -1) {
    newStory = newStory.replace(':insertx:', xItem);
  }
  while (newStory.indexOf(':inserty:') !== -1) {
    newStory = newStory.replace(':inserty:', yItem);
  }
  while (newStory.indexOf(':insertz:') !== -1) {
    newStory = newStory.replace(':insertz:', zItem);
  }

  if (customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById('uk').checked) {
    let weight = Math.round(300 * 0.071429).toString() + ' stone';
    let temperature = Math.round((94 - 32) * (5 / 9)).toString() + ' Celsius';
    newStory = newStory
      .replace('300 pounds', weight)
      .replace('94 fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
