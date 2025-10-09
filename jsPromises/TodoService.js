import { ApiClient } from "./ApiClient.js";

export class TodoService extends ApiClient {
  endpoint = "/todos";

  async getTodo(id) {
    return await this.fetchData(`${this.endpoint}/${id}`);
  }
}
