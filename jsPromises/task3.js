const BASE_URL = "https://jsonplaceholder.typicode.com";

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Status code error: " + response.status);
  }
  return response.json();
}

async function getTodo(id) {
  return await fetchData(`${BASE_URL}/todos/${id}`);
}

async function getUser(id) {
  return await fetchData(`${BASE_URL}/users/${id}`);
}

try {
  const allPromises = await Promise.all([getTodo(18), getUser(1)]);
  console.log("All Promises:", allPromises);
} catch (error) {
  console.error("All Promises error:", error);
}

try {
  const firstResult = await Promise.race([getTodo(2), getUser(2)]);
  console.log("First Promise:", firstResult);
} catch (error) {
  console.error("First Promise error:", error);
}
