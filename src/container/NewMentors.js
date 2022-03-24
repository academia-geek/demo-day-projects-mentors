import React from 'react'
//import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { RegisterBg } from '../styles/StyledRegister'

const NewMentors = () => {

    //const dispatch = useDispatch()
    const [values, handleInputChange] = useForm({
        codeProfile:'8',
        name: '',
        description:'',
        img:'',
        experience:'',
        price:'',
        especialidad:'',
        education: '',
        category: '',
        languages: '',
        calendly:'',
        email: '',
        password: ''
    })
    const { codeProfile, name, description, img, experience, price, especialidad, education, category, languages, calendly, email, password } = values

    const handleRegister = (e) => {
        e.preventDefault()
        console.log(values)
        //dispatch(registerAsync(email, password, name))
    }


    return (
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
                            <input type="file" name="img" placeholder="img" value={img} onChange={handleInputChange} />
                        </div>
                        <div>
                            <input type="number" name="codeProfile" placeholder="ingresa un id" value={codeProfile} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className='data'>
                    <div>
                            <input type="text" name="languages" placeholder="languages" value={languages} onChange={handleInputChange} />
                        </div>
                        <div>
                        <select className="form-select" aria-label="Default select example" name="category" onChange={handleInputChange} style={{ width: '15vw' }}>
                            <option value=''>Busca por categorías</option>
                            <option value="Abogado">Abogado</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Finanzas">Finanzas</option>
                        </select>
                        </div>
                        
                    </div>


                    <div className="cuenta">
                        <div>
                            <input type="email" name="email" placeholder="Correo electrónico" value={email} onChange={handleInputChange} />
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="password" value={password} onChange={handleInputChange} />
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

// faltas el creador de id para codeprofile, img, select form para categorias
//dispatch, addcolletion, 

export default NewMentors