export function getStoredGuest() {
    return JSON.parse(localStorage.getItem("guest")) || {};
}