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
            searchEspecialidad: Yup.string().required(),
        }),
        onSubmit: ({ searchEspecialidad }) => {
            dispatch(searchEspecialidadAsync(searchEspecialidad))
            navigate('/list')
        }
    })

    return (
        <Form onSubmit={formik.handleSubmit} className="d-flex">
            <select className="form-select" aria-label="Default select example" name="searchEspecialidad" onChange={formik.handleChange} style={{ width: '25vw' }} >
                <option value=''>Area de interés</option>
                <option value="Abogado Financiero">Asesoría Contable y financiera</option>
                <option value="Abogado Laboral">Asesoría legal para empresas</option>
                <option value="Marketing Digital">Estrategia para marketing de contenidos</option>
                <option value="Mercadotecnia">Estrategia para Ventas y gestión comercial</option>
                <option value="Financiero">Viabilidad y Como Valorar la empresa</option>
                <option value="Contabilidad">Que hacer para cumplir mis objetivos financieros</option>
            </select>
            <button className="btn btn-outline-success" type="submit">Buscar</button>
        </Form>


    )
}

export default SearchEspecialidad