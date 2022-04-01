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
        especialidad: 'Area de Experiencia',
        education: '',
        category: '',
        languages: '',
        calendly: '',
        email: '',
        password: ''
    })
    const { codeProfile, name, description, experience, price, especialidad, password, education, category, languages, calendly, email } = values



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
        <div>
            <RegisterBg>
                <div className='register my-3 w-75'>
                    <h1>Registrar como Mentor</h1>
                    <form onSubmit={handleRegister}>
                        <div className='data my-1'>
                            <div>
                                <input type="text" name="name" placeholder="Nombre" value={name} onChange={handleInputChange} />
                            </div>
                            <div>
                                <input type="text" name="description" placeholder="Description" value={description} onChange={handleInputChange} />
                            </div>
                            <div>
                                <input type="text" name="experience" placeholder="Experience" value={experience} onChange={handleInputChange} />
                            </div>
                            <div>
                                <input type="text" name="price" placeholder="Price" value={price} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className='data my-1'>
                            <div>
                                <input type="text" name="education" placeholder="Education" value={education} onChange={handleInputChange} />
                            </div>
                            <div>
                                <input type="text" name="calendly" placeholder="Url de Calendly" value={calendly} onChange={handleInputChange} />
                            </div>
                            <div>
                                <input type="text" name="languages" placeholder="Lenguajes" value={languages} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className='data my-1'>
                            <div className=' mx-5'>
                                <select className="form-select" aria-label="Default select example" name="category" onChange={handleInputChange} style={{ width: '15vw' }} required>
                                    <option value=''>Categoría</option>
                                    <option value="Abogado">Abogado</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Finanzas">Finanzas</option>
                                </select>
                            </div>
                            <div className="dropdown mx-5">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {especialidad}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ width: '25vw' }}>
                                    <li>
                                        <div className="dropdown-item" >
                                            <select className="form-select" aria-label="Default select example" name="especialidad" onChange={handleInputChange}>
                                                <option value=''>Abogados</option>
                                                <option value="Abogado Financiero">Asesoría Contable y financiera</option>
                                                <option value="Abogado Laboral">Asesoría legal para empresas</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown-item" >
                                            <select className="form-select" aria-label="Default select example" name="especialidad" onChange={handleInputChange}>
                                                <option value=''>Marketing</option>
                                                <option value="Mercadotecnia">Estrategia para Ventas y gestión comercial</option>
                                                <option value="Marketing Digital">Estrategia para marketing de contenidos</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown-item" >
                                            <select className="form-select" aria-label="Default select example" name="especialidad" onChange={handleInputChange}>
                                                <option value=''>finanzas</option>
                                                <option value="Financiero">Viabilidad y Como Valorar la empresa</option>
                                                <option value="Contabilidad">Que hacer para cumplir mis objetivos financieros</option>
                                            </select>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="cuenta  my-1">
                            <div>
                                <input type="email" name="email" placeholder="Correo electrónico" value={email} onChange={handleInputChange} className='mx-2' />
                                <input type="password" name="password" placeholder="password" value={password} onChange={handleInputChange} className='mx-2' />
                            </div>
                            <div>
                                <input type="file" name="img" placeholder="img" value={values.img} onChange={handleFileChanged} />
                            </div>
                        </div>
                        <div className="registrar">
                            <button>Enviar</button>
                        </div>
                    </form>
                </div>
            </RegisterBg>
        </div>
    )
}

// faltas el creador de id para codeprofile, img, select form para categorias
//dispatch, addcolletion, 

export default NewMentors