import { TodoService } from "./TodoService.js";
import { UserService } from "./UserService.js";

const todoService = new TodoService();
const userService = new UserService();

try {
  const allPromises = await Promise.all([
    todoService.getTodo(4),
    userService.getUser(5),
  ]);
  console.log("All Promises:", allPromises);
} catch (error) {
  console.error("All Promises error:", error);
}

try {
  const firstResult = await Promise.race([
    todoService.getTodo(2),
    userService.getUser(2),
  ]);
  console.log("First Promise:", firstResult);
} catch (error) {
  console.error("First Promise error:", error);
}
