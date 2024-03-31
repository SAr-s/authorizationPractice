// Write your JS code here
import Cookies from 'js-cookie'

const Login = props => {
  const onLogin = async () => {
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
    }

    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    if (response.ok === true) {
      const {history} = props
      Cookies.set('jwt_token', data.jwtToken, {
        expires: 30,
        path: '/',
      })
      history.replace('/')
    }
  }

  return (
    <div>
      <h1>Please Login</h1>
      <button onClick={onLogin} type="button">
        Login with Sample Credits
      </button>
    </div>
  )
}

export default Login
