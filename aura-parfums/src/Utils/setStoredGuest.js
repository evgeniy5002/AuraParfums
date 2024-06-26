export function setStoredGuest(storedGuest) {
    localStorage.setItem("guest", JSON.stringify(storedGuest));
}