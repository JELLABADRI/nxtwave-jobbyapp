import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="row">
      <div className="spb">
        <div>
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </Link>

          <ul className="row">
            <li>
              <Link to="/">
                <AiFillHome />
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link to="/jobs">
                <BsFillBriefcaseFill />
                <p>Jobs</p>
              </Link>
            </li>
            <li>
              <button
                aria-label="Save"
                type="button"
                className="nav-mobile-btn"
                onClick={onClickLogout}
              >
                Logout
                <FiLogOut />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
