// return the user data from the session storage
export const getUser = () => {
  const userStr = sessionStorage.getItem("user")
  if (userStr) return JSON.parse(userStr)
  return null
}
// return the token from the session storage
export const getEmail = () => {
  return sessionStorage.getItem("email") || null
}
// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem("email")
  sessionStorage.removeItem("user")
}
// set the token and user from the session storage
export const setUserSession = (email, user) => {
  sessionStorage.setItem("email", email)
  sessionStorage.setItem("user", JSON.stringify(user))
}
