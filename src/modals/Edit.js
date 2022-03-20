import { useFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { updateComentAsync } from '../redux/action/actionComents'

const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    position:fixed;
    top:0;
    left:0;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .container{
        padding: 10px;
        background-color:white;
        margin-top: 30px;
        border-radius: 10px;
        width: 35vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items:center;
    }
    .title{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
        width: 70%;
        h1{
            font-size:24px;
        }
        button{
            border-radius: 100%;
            background-color:black;
            color:white;
            font-size:18px;
            text-align: center;
        }
    }

   form{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        input{
            width: 20vw;
            height: 5vh;
            margin: 10px 0px;
        }
   }

    `

const Edit = ({ children, edit, setModal, name }) => {

    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            nameUser: edit.nameUser,
            imgUser: edit.photoURL,
            opinion: edit.opinion
        },
        validationSchema: Yup.object().shape({
            opinion: Yup.string().required()
        }),
        onSubmit: (data) => {
            dispatch(updateComentAsync(name, data))
            setModal(false)
        }
    })

    return (
        <>
            <Modal>
                <div className="container">
                    <div className="title">
                        <h1 >Editar Comentario</h1>
                        <div >
                            <button onClick={() => setModal(false)} ><IoMdClose /></button>
                        </div>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <input type="text" name="opinion" onChange={formik.handleChange} />
                        </div>
                        <div>
                            <button type='submit' className="btn btn-success border border-success">Enviar</button>
                        </div>
                    </form>
                    {children}
                </div>
            </Modal>
        </>)
}

export default Edit