import Cookies from 'js-cookie'

import {Link, Redirect} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="home-heading">
          Find The Job That <br />
          Fits Your Life
        </h1>
        <p className="home-paragraph">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link className="retry-btn-link" to="/jobs">
          <button className="home-jobs-button" type="button">
            Find Jobs
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home
