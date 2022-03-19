import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { searchAsync } from '../redux/action/actionSearch'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Search = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            search: ""
        },
        validationSchema: Yup.object({
            search: Yup.string().required()
        }),
        onSubmit: ({ search }) => {
            dispatch(searchAsync(search))
            navigate('/list')
        }
    })


    return (
        <div>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <form onSubmit={formik.handleSubmit} className="d-flex">
                        <select className="form-select" aria-label="Default select example" name="search" onChange={formik.handleChange}>
                            <option value=''>Busca por categorías</option>
                            <option value="Abogado">Abogado</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Finanzas">Finanzas</option>
                            <option value="Contabilidad">Contabilidad</option>
                            <option value="Ventas">Ventas</option>
                            <option value="Logistica">Logistica</option>
                            <option value="Empoderamiento">Empoderamiento</option>
                            <option value="Psicología">Psicología</option>
                        </select>
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Search