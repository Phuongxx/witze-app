export const displayJoke = document.querySelector("#displayJoke");

export const jokeList = document.querySelector("#jokeList");
const getJokeListText = document.querySelector("#disableEntryText");

export function saveCurrentJoke(jokeText, jokeList) {
  getJokeListText.textContent = "";

  const savedJokeContainer = document.createElement("div");
  savedJokeContainer.classList.add("saved-joke");

  const savedJokeText = document.createElement("p");
  savedJokeText.classList.add("saved-joke__text");
  savedJokeText.textContent = jokeText;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("saved-joke__delete-button");
  deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="saved-joke__delete-icon icon">
    <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
  </svg>`;

  deleteButton.addEventListener("click", () => {
    savedJokeContainer.remove();
  });

  savedJokeContainer.append(savedJokeText, deleteButton);
  jokeList.appendChild(savedJokeContainer);
}

// const LOCAL_STORAGE_KEY = "jokes";

// export function getSavedJokes() {
//   return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
// }

// export function saveJoke(joke) {
//   const savedJokes = getSavedJokes();
//   const newSavedJokes = [joke, ...savedJokes];
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSavedJokes));
// }

// import { saveJoke } from "../../storing";

// export const displayJokes = document.querySelector("#displayJoke");
// export const jokeList = document.querySelector("#jokeList");
// export const jokeText = displayJokes.textContent;
// export const entryText = document.querySelector("#disableEntryText");

// export function savedCurrentJoke(jokeText, jokeList) {
//   const savedCurrentJoke = document.createElement("div");
//   savedCurrentJoke.classList.add("saved-joke");
//   savedCurrentJoke.id = "jokeSaved";

//   const savedJokeText = document.createElement("p");
//   savedJokeText.classList.add("saved-joke__text");
//   savedJokeText.textContent = jokeText;

//   const deleteButton = document.createElement("button");
//   deleteButton.classList.add("saved-joke__delete-button");
//   deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="saved-joke__delete-icon icon">
//     <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
//   </svg>`;

//   deleteButton.addEventListener("click", () => {
//     savedCurrentJoke.remove();
//   });
//   savedCurrentJoke.append(savedJokeText, deleteButton);
//   jokeList.appendChild(savedCurrentJoke);
// }
