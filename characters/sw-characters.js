import { people } from "../data/people.js";
import { removeChildren } from "../utils/index.js";

const mainContent = document.querySelector("#main");

const allCharacters = people;
const maleCharacters = people.filter((person) => person.gender === "male");
const femaleCharacters = people.filter((person) => person.gender === "female");
const otherCharacters = people.filter((person) => {
  if (person.gender !== "male" && person.gender !== "female") {
    return person;
  }
});

const header = document.createElement("header");

const headerText = document.createElement('h1');
headerText.textContent = 'Character Gallery'
header.appendChild(headerText)

const allButton = document.createElement("button");
allButton.textContent = "All Characters";

const maleButton = document.createElement("button");
maleButton.textContent = "Male Characters";

populateDOM(people);

allButton.addEventListener("click", () => populateDOM(allCharacters));

maleButton.addEventListener("click", () => populateDOM(maleCharacters));

const femaleButton = document.createElement("button");
femaleButton.textContent = "Female Characters";

femaleButton.addEventListener("click", () => populateDOM(femaleCharacters));

const otherButton = document.createElement("button");
otherButton.textContent = "Nonbinary Characters";

otherButton.addEventListener("click", () => populateDOM(otherCharacters));

header.appendChild(allButton);
header.appendChild(maleButton);
header.appendChild(femaleButton);
header.appendChild(otherButton);

document.body.insertBefore(header, mainContent);

function populateDOM(characters) {
  removeChildren(mainContent);
  characters.forEach((element, index) => {
    const charFigure = document.createElement("figure");
    const charImg = document.createElement("img");
    const charNum = getLastNumber(element.url);
    charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`;
    const charCaption = document.createElement("figcaption");
    charCaption.textContent = element.name;

    charFigure.appendChild(charImg);
    charFigure.appendChild(charCaption);
    mainContent.appendChild(charFigure);
  });
}
function getLastNumber(url) {
  let end = url.lastIndexOf("/");
  let start = end - 2;
  console.log(url.charAt(start));
  if (url.charAt(start) === "/") {
    start++;
  }
  return url.slice(start, end);
}
