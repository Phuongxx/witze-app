import { generateJoke, API_ENDPOINT } from "./api.js";

const getJoke = document.querySelector("#generateJoke");
const saveJoke = document.querySelector("#saveJoke");
const displayJoke = document.querySelector("#displayJoke");

getJoke.addEventListener("click", async () => {
  const joke = await generateJoke();
  displayJoke.innerText = joke;
});
