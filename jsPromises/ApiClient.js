export class ApiClient {
  baseUrl = "https://jsonplaceholder.typicode.com";

  async fetchData(endpoint) {
    const response = await fetch(`${this.baseUrl}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Status code error: ${response.status}`);
    }
    return response.json();
  }
}
