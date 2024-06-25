export function setStoredUsers(storedUsers) {
    localStorage.setItem("users", JSON.stringify(storedUsers));
}