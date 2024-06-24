export function getStoredUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}