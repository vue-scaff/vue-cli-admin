// Import Cookie
import cookie from "./cookie";

// Set Key
const key = "Admin-Token";

// Export Get
export function get() {
  // return cookie.get(key);
  return sessionStorage.getItem(key);
}

// Export Set
export function set(token) {
  // return cookie.set(key, token);
  return sessionStorage.setItem(key, token);
}

// Export Remove
export function remove() {
  // return cookie.remove(key);
  return sessionStorage.removeItem(key);
}
