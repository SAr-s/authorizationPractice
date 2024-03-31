// Write your JS code here
import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

const LogoutButton = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <>
      <button onClick={onLogout} type="button">
        Logout
      </button>
    </>
  )
}

export default withRouter(LogoutButton)
