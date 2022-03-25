import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fileUpload } from '../hekpers/fileUpload'
import { useForm } from '../hooks/useForm'
import { registerMentorAsync } from '../redux/action/actionMentor'
import { registerAsync } from '../redux/action/actionRegister'
import { RegisterBg } from '../styles/StyledRegister'

const NewMentors = () => {

    const dispatch = useDispatch()
    const [values, handleInputChange] = useForm({
        codeProfile: '8',
        name: '',
        description: '',
        img: '',
        experience: '',
        price: '',
        especialidad: '',
        education: '',
        category: '',
        languages: '',
        calendly: '',
        email: '',
        password: ''
    })
    const { codeProfile, name, description, img, experience, price, especialidad, education, category, languages, calendly, email, password } = values

    const handleRegister = (e) => {
        e.preventDefault()
        console.log(values)
        dispatch(registerAsync(email, password, name))
        dispatch(registerMentorAsync(values))

    }

    const handleFileChanged = (e) => {

        const file = e.target.files[0];
        
        fileUpload(file)
            .then(response => {
                values.img = response
                console.log(values.img)
            })
            .catch(e => {
                console.log(e.message);
            })
    }



    return (
        <div>
            <RegisterBg>
                <div className='register'>
                    <h1>Registrar como Mentor</h1>
                    <form onSubmit={handleRegister}>
                        <div className='data'>
                            <div>
                                <input type="text" name="name" placeholder="Nombre" value={name} onChange={handleInputChange} />
                            </div>
                            <div>
                                <input type="text" name="description" placeholder="description" value={description} onChange={handleInputChange} />
                            </div>
                            <div>
                                <input type="text" name="experience" placeholder="experience" value={experience} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className='data'>
                            <div>
                                <input type="text" name="price" placeholder="price" value={price} onChange={handleInputChange} />
                            </div>
                            <div>
                                <input type="text" name="especialidad" placeholder="especialidad" value={especialidad} onChange={handleInputChange} />
                            </div>
                            <div>
                                <input type="text" name="education" placeholder="education" value={education} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className='data'>
                            <div>
                                <input type="text" name="calendly" placeholder="calendly" value={calendly} onChange={handleInputChange} />
                            </div>
                            
                            <div>
                                <input type="number" name="codeProfile" placeholder="ingresa un id" value={codeProfile} onChange={handleInputChange} />
                            </div>
                            <div>
                                <input type="text" name="languages" placeholder="languages" value={languages} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className='data'>
                            
                            
                            <div>
                        <select className="form-select" aria-label="Default select example" name="category" onChange={handleInputChange} style={{ width: '15vw' }} required>
                            <option value=''>Busca por categorías</option>
                            <option value="Abogado">Abogado</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Finanzas">Finanzas</option>
                        </select>
                        </div>
                        <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Especialidad
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ width: '20vw' }}>
                                    <li><a className="dropdown-item" ><select className="form-select" aria-label="Default select example" name="especialidad" onChange={handleInputChange}>
                                        <option selected>abogados</option>
                                        <option value="abogadofinanciero">abogado financiero</option>
                                        <option value="abogadocomercial">abogado comercial</option>
                                    </select></a></li>
                                    <li><a className="dropdown-item" ><select className="form-select" aria-label="Default select example" name="especialidad" onChange={handleInputChange}>
                                        <option selected>Marketing</option>
                                        <option value="Mercadotecnia">Mercadotecnia</option>
                                        <option value="Marketing digital">Marketing digital</option>
                                    </select></a></li>
                                    <li><a className="dropdown-item" ><select className="form-select" aria-label="Default select example" name="especialidad" onChange={handleInputChange}>
                                        <option selected>finanzas</option>
                                        <option value="finanzas">finanzas</option>
                                        <option value="contabilidad">contabilidad</option>
                                    </select></a></li>
                                </ul>
                            </div>

                        </div>


                        <div className="cuenta">
                            <div>
                                <input type="email" name="email" placeholder="Correo electrónico" value={email} onChange={handleInputChange} />
                            </div>
                            <div>
                                <input type="password" name="password" placeholder="password" value={password} onChange={handleInputChange} />
                            </div>
                            <div>
                                <input type="file" name="img" placeholder="img" value={img} onChange={handleFileChanged} />
                            </div>


                        </div>
                        <div className="registrar">
                            <p>¿Quieres iniciar sesión? <Link className='link' to="/login">Iniciar Sesión</Link></p>
                            <button>Enviar</button>
                        </div>
                    </form>
                </div>
            </RegisterBg>

            <div className='m-5'>
                dhuij
            </div>

            <br />
        </div>
    )
}

// faltas el creador de id para codeprofile, img, select form para categorias
//dispatch, addcolletion, 

export default NewMentors