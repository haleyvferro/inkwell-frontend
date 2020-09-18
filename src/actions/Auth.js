export const loginSuccess = (email) => {
    return {
      type: "LOGIN_SUCCESS",
      email: email
    }
  }
  
  
  export const logoutSuccess = () => {
    return {
      type: 'LOGOUT_SUCCESS'
    }
  }