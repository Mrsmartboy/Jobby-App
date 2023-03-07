import './index.css'

import Cookie from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {GiSuitcase} from 'react-icons/gi'
import {ImExit} from 'react-icons/im'
import {Link, withRouter} from 'react-router-dom'

const Header = props => {
  const onClickLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <>
      <div className="cl">
        <div className="desktop-view">
          <nav className="nav-bar">
            <Link className="link-items" to="/">
              <img
                src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                className="img"
                alt="website logo"
              />
            </Link>

            <div className="flex">
              <Link className="link-items" to="/">
                <li className="li-items">Home</li>
              </Link>
              <Link className="link-items" to="/jobs">
                <li className="li-items">Jobs </li>
              </Link>
            </div>
            <ul className="ul-items">
              <li>
                <button onClick={onClickLogout} type="button" className="btn">
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mobile-view">
          <nav className="nav-bar">
            <Link className="link-items" to="/">
              <img
                src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                className="img"
                alt="website logo"
              />
            </Link>

            <div className="flex">
              <Link className="link-items" to="/">
                <li className="li-items">
                  <AiFillHome />
                </li>
              </Link>

              <li className="li-items">
                <Link className="link-items" to="/jobs">
                  <GiSuitcase />
                </Link>
              </li>
            </div>
            <ul className="ul-items">
              <li>
                <button onClick={onClickLogout} type="button" className="btn">
                  <ImExit />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default withRouter(Header)
