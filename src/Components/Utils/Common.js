// return the user data from the session storage
export const getUser = () => {
  const userStr = localStorage.getItem("user")
  if (userStr) return JSON.parse(userStr)
  return null
}
// return the token from the session storage
export const getId = () => {
  return localStorage.getItem("id") || null
}
// remove the token and user from the session storage
export const removeUserSession = () => {
  localStorage.removeItem("id")
  localStorage.removeItem("user")
}
// set the token and user from the session storage
export const setUserSession = (id, user) => {
  localStorage.setItem("id", id)
  localStorage.setItem("user", JSON.stringify(user))
}
