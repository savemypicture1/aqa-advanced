import { ApiClient } from "./ApiClient.js";

export class UserService extends ApiClient {
  endpoint = "/users";

  async getUser(id) {
    return await this.fetchData(`${this.endpoint}/${id}`);
  }
}
