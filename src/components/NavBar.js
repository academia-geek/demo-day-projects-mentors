import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutAsync } from '../redux/action/actionLogin'
import Search from './Search'
import { BiLogInCircle } from 'react-icons/bi';
import { BiLogOutCircle } from 'react-icons/bi';


const NavBar = ({ isLoggedIn }) => {

  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutAsync())
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom shadow p-3 mb-3 bg-body rounded">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img width='80px' src='https://res.cloudinary.com/dmdu8u7wo/image/upload/v1648585899/proyecto-final/Mentor_cultj2.png' alt='logo'></img></a>
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
          <div>
            <Search />
          </div>
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {isLoggedIn ?
                  <a onClick={handleLogout} className="nav-link active" href="/"><BiLogOutCircle className='m-2' />Cerrar Sesión</a>
                  :
                  <a className="nav-link active" href="/login"><BiLogInCircle className='m-2' />Inscribirse</a>

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