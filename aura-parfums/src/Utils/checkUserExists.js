import { getStoredUsers } from "./getStoredUsers";

export const checkUserExists = (email) => {
    const storedUsers = getStoredUsers();
    return storedUsers.some((user) => user.email === email);
}