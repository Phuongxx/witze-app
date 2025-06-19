import { generateJoke } from "../Api/api";
import {
  saveCurrentJoke,
  jokeList,
  displayJoke,
} from "../Sections/Save_Section/storing";

const fetchJokeBtn = document.querySelector("#generateJoke");
const saveJokeBtn = document.querySelector("#saveJoke");

fetchJokeBtn.addEventListener("click", async () => {
  saveJokeBtn.classList.remove("current-joke__save--disabled");
  const joke = await generateJoke();
  displayJoke.textContent = joke;
});

saveJokeBtn.addEventListener("click", async () => {
  saveCurrentJoke(displayJoke.textContent, jokeList);
});

// import { generateJoke } from "./api.js";
// import {
//   savedCurrentJoke,
//   displayJokes,
//   entryText,
// } from "./Sections/Save_Section/save_joke.js";
// import { saveJoke } from "./storing.js";

// const getJoke = document.querySelector("#generateJoke");
// const saveButton = document.querySelector("#saveJoke");
// let currentJoke = "";

// getJoke.addEventListener("click", async () => {
//   const joke = await generateJoke();
//   if (!currentJoke) {
//     saveButton.classList.remove("current-joke__save--disabled");
//   }
//   currentJoke = joke;
//   displayJokes.textContent = joke;
// });

// saveButton.addEventListener("click", () => {
//   entryText.classList.add("disable-entry-text");
//   savedCurrentJoke(displayJokes.textContent, jokeList);
//   saveJoke(currentJoke);
// });
