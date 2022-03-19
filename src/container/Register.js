import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { registerAsync } from '../redux/action/actionRegister'
import { RegisterBg } from '../styles/StyledRegister'

const Register = () => {

    const dispatch = useDispatch()
    const [values, handleInputChange] = useForm({
        name: '',
        lastname: '',
        phone: '',
        celphone: '',
        email: '',
        password: ''
    })
    const { name, lastname, phone, celphone, email, password } = values

    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(registerAsync(email, password, name))
    }

    return (
        <RegisterBg>
            <div className='register'>
                <h1>Registro</h1>
                <form onSubmit={handleRegister}>
                    <div>
                        <div>
                            <input type="text" name="name" placeholder="Nombre" value={name} onChange={handleInputChange} />
                        </div>
                        <div>
                            <input type="text" name="lastname" placeholder="Apellido" value={lastname} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type="number" name="phone" placeholder="Teléfono" value={phone} onChange={handleInputChange} />
                        </div>
                        <div>
                            <input type="number" name="celphone" placeholder="Celular" value={celphone} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="cuenta">
                        <div>
                            <input type="email" name="email" placeholder="Correo electrónico" value={email} onChange={handleInputChange} />
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="Contraseña" value={password} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="registrar">
                        <p>¿Quieres iniciar sesión? <Link className='link' to="/login">Iniciar Sesión</Link></p>
                        <button>Enviar</button>
                    </div>
                </form>
            </div>
        </RegisterBg>
    )
}

export default Register