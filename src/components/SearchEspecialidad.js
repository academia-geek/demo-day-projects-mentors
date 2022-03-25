import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Form } from '../styles/StyledHome'
import { searchEspecialidadAsync } from '../redux/action/actionSearch'

const SearchEspecialidad = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            searchEspecialidad: ""
        },
        validationSchema: Yup.object({
            searchEspecialidad: Yup.string().required()
        }),
        onSubmit: ({ searchEspecialidad }) => {
            console.log(searchEspecialidad);
            dispatch(searchEspecialidadAsync(searchEspecialidad))
            navigate('/list')
        }
    })

    return (
        <Form onSubmit={formik.handleSubmit} className="dropdown " style={{ display: 'flex', justifyContent: 'center', width: '30vw' }}>
            <div style={{ marginRight: '30px' }}>
                <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Especialidad
                </button>
                <ul className="dropdown-menu mx-5" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <div className="dropdown-item" >
                            <select className="form-select" aria-label="Default select example" name="searchEspecialidad" onChange={formik.handleChange}>
                                <option value=''>Abogados</option>
                                <option value="Abogado Financiero">¿Control de Estados financieros?</option>
                                <option value="Abogado Comercial">¿Transacción contables?</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown-item" >
                            <select className="form-select" aria-label="Default select example" name="searchEspecialidad" onChange={formik.handleChange}>
                                <option value=''>Marketing</option>
                                <option value="Mercadotecnia">¿Marketing de contenidos?</option>
                                <option value="Marketing Digital">¿Ventas y gestión comercial?</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown-item" >
                            <select className="form-select" aria-label="Default select example" name="searchEspecialidad" onChange={formik.handleChange}>
                                <option value=''>finanzas</option>
                                <option value="Finanzas">¿Valoración de empresa?</option>
                                <option value="Contabilidad">contabilidad</option>
                            </select>
                        </div>
                    </li>
                </ul>
            </div>
            <button className="btn btn-outline-success" type="submit">Buscar</button>
        </Form>
    )
}

export default SearchEspecialidad