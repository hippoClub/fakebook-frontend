// return the user data from the session storage
export const getUser = () => {
  const userStr = sessionStorage.getItem("user")
  if (userStr) return JSON.parse(userStr)
  return null
}
// return the token from the session storage
export const getId = () => {
  return sessionStorage.getItem("id") || null
}
// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem("id")
  sessionStorage.removeItem("user")
}
// set the token and user from the session storage
export const setUserSession = (id, user) => {
  sessionStorage.setItem("id", id)
  sessionStorage.setItem("user", JSON.stringify(user))
}
