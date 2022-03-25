import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fileUpload } from '../hekpers/fileUpload'
import { useForm } from '../hooks/useForm'
import { registerMentorAsync } from '../redux/action/actionMentor'
import { registerAsync } from '../redux/action/actionRegister'
import { RegisterBg } from '../styles/StyledRegister'
import { v4 as uuidv4 } from 'uuid';

const NewMentors = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [values, handleInputChange] = useForm({
        codeProfile: uuidv4(),
        name: '',
        description: '',
        img: '',
        experience: '',
        price: '',
        especialidad: 'Especialidad',
        education: '',
        category: '',
        languages: '',
        calendly: '',
        email: '',
        password: ''
    })
    const { codeProfile, name, description, img, experience, price, especialidad, password, education, category, languages, calendly, email } = values



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

    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(registerAsync(email, password, name))
        const img = values.img
        dispatch(registerMentorAsync({ codeProfile, name, description, img, experience, price, especialidad, education, category, languages, calendly, email }))
        navigate('/')
    }

    return (
        <>
            <RegisterBg>
                <div className='register'>
                    <h1>Registrar como Mentor</h1>
                    <form onSubmit={handleRegister}>
                        <div className='data'>
                            <div>
                                <input type="text" name="name" placeholder="Nombre" value={name} onChange={handleInputChange} />
                            </div>
                            <div>
                                <input type="text" name="description" placeholder="Description" value={description} onChange={handleInputChange} />
                            </div>
                            <div>
                                <input type="text" name="experience" placeholder="Experience" value={experience} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className='data'>
                            <div>
                                <input type="text" name="price" placeholder="Price" value={price} onChange={handleInputChange} />
                            </div>
                            <div>
                                <input type="text" name="education" placeholder="Education" value={education} onChange={handleInputChange} />
                            </div>
                            <div>
                                <input type="text" name="calendly" placeholder="Url de Calendly" value={calendly} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className='data'>
                            <div>
                                <input type="text" name="languages" placeholder="Lenguajes" value={languages} onChange={handleInputChange} />
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
                                    {especialidad}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ width: '25vw' }}>
                                    <li>
                                        <div className="dropdown-item" >
                                            <select className="form-select" aria-label="Default select example" name="especialidad" onChange={handleInputChange}>
                                                <option value=''>Abogados</option>
                                                <option value="Abogado Financiero">Abogado Financiero</option>
                                                <option value="Abogado Comercial">Abogado Comercial</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown-item" >
                                            <select className="form-select" aria-label="Default select example" name="especialidad" onChange={handleInputChange}>
                                                <option value=''>Marketing</option>
                                                <option value="Mercadotecnia">Mercadotecnia</option>
                                                <option value="Marketing Digital">Marketing Digital</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown-item" >
                                            <select className="form-select" aria-label="Default select example" name="especialidad" onChange={handleInputChange}>
                                                <option value=''>finanzas</option>
                                                <option value="Finanzas">Finanzas</option>
                                                <option value="Contabilidad">Contabilidad</option>
                                            </select>
                                        </div>
                                    </li>
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
                            <button>Enviar</button>
                        </div>
                    </form>
                </div>
            </RegisterBg>
        </>
    )
}

// faltas el creador de id para codeprofile, img, select form para categorias
//dispatch, addcolletion, 

export default NewMentors