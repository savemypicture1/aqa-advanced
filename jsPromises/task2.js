const BASE_URL = "https://jsonplaceholder.typicode.com";

function fetchData(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Status code error: " + response.status);
    }
    return response.json();
  });
}

function getTodo(id) {
  return fetchData(`${BASE_URL}/todos/${id}`);
}

function getUser(id) {
  return fetchData(`${BASE_URL}/users/${id}`);
}

const allPromises = Promise.all([getTodo(4), getUser(5)]);

allPromises
  .then((results) => {
    console.log("All Promises:", results);
    return results;
  })
  .catch((error) => {
    console.error("All Promises error:", error);
  });

const firstPromise = Promise.race([getTodo(6), getUser(7)]);

firstPromise
  .then((result) => {
    console.log("First Promise:", result);
    return result;
  })
  .catch((error) => {
    console.error("First Promise error:", error);
  });
