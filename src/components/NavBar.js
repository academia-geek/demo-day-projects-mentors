import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutAsync } from '../redux/action/actionLogin'

const NavBar = ({ isLoggedIn }) => {

  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutAsync())
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img className='w-50 mx-2' src='https://res.cloudinary.com/dmdu8u7wo/image/upload/v1648569720/proyecto-final/mentorslogo_osljpf.png' alt='logo'></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/mentor">Registrarse como mentor</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">Ayuda</a>
            </li>
          </ul>
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {isLoggedIn ?
                  <a onClick={handleLogout} className="nav-link active" href="/">Cerrar Sesión</a>
                  :
                  <a className="nav-link active" href="/login">Inscribirse</a>
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar