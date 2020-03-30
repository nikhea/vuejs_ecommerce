
//setup config/config/header and token
export const tokenConfig = getState => {
    //Get token from localstorage
  const token = getState().auth.token
  //Headers
  const config = {
      header: {
          "Content-type": "application/json"
      }
  }
//  if token, add to header
if (token) {
    config.header['x-auth-token'] = token
}
return config
}
