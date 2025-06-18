export const API_ENDPOINT = "https://witzapi.de/api/joke/";

export async function generateJoke() {
  const response = await fetch(API_ENDPOINT);
  const result = await response.json();
  return result[0].text;
}
