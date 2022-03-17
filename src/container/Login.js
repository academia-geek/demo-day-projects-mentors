import React from 'react'
import { Link } from 'react-router-dom'
import { LoginBg } from '../styles/StyledLogin'
import { AiOutlineGoogle } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { useForm } from '../hooks/useForm'
import { useDispatch } from 'react-redux'
import { loginEmailPassword, loginFacebook, loginGoogle } from '../redux/action/actionLogin'

const Login = () => {

    const dispatch = useDispatch()
    const [values, handleInputChange] = useForm({
        email: '',
        password: ''
    })
    const { email, password } = values

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(loginEmailPassword(email, password))
    }

    const handleGoogle = () => {
        dispatch(loginGoogle())
    }

    const handleFacebook = () => {
        dispatch(loginFacebook())
    }

    return (
        <LoginBg>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label for="email">Correo electrónico</label>
                    <input id="email" type="email" name="email" value={email} onChange={handleInputChange} />
                </div>
                <div>
                    <label for="password">Contraseña</label>
                    <input id="password" type="password" name="password" value={password} onChange={handleInputChange} />
                </div>
                <div className='redes'>
                    <button onClick={handleGoogle} className="google"><AiOutlineGoogle /> Google</button>
                    <button onClick={handleFacebook} className="facebook"><FaFacebookF /> Facebook</button>
                </div>
                <div>
                    <p>¿No tienes cuenta? <Link className='link' to="/register">Registrate</Link></p>
                    <button>Iniciar Sesión</button>
                </div>
            </form>
        </LoginBg>
    )
}

export default Login