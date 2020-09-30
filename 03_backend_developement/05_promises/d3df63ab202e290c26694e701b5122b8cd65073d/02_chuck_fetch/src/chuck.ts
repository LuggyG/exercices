import fetch, { Response } from "node-fetch";

function getCategories(): Promise<string[]> {
  // - Must not use a parameter.
  //Call the api categories endpoint with `fetch`.
  //Return a promise with an array of strings, those strings being your categories.
  return fetch(`https://api.chucknorris.io/jokes/categories`, { method: "GET" }).then((response: Response) =>
    response.json(),
  );
}

function getChuckNorrisJoke(selectedCategory: string): Promise<string> {
  return fetch(`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`).then((Response) =>
    Response.json().then((joke) => joke.value),
  );
}

// Leave the line below for tests to work properly
export { getCategories, getChuckNorrisJoke };
