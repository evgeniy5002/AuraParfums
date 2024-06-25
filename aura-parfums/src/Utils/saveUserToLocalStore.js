import { getStoredUsers } from "./getStoredUsers";
import { setStoredUsers } from "./setStoredUsers";

export const saveUserToLocalStore = (credentials) => {
    let users = getStoredUsers();
    users.push(credentials);
    setStoredUsers(users);
}