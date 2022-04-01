import React from 'react'
import styled from 'styled-components'
import { IoMdClose } from 'react-icons/io'

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
    padding: 30px 0;

    .container{
        padding: 0px 10px;
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
        width: 80%;
        h4{
            font-size:20px;
            margin-top: 50px;
            text-align: center;
        }
        button{
            border-radius: 100%;
            border: 0.2px solid black;
            background-color:white;
            color:black;
            font-size:18px;
        }
    }
    `

const Pay = ({ setModal, name, email, calendly, mentor, children }) => {
    return (
        <>
            <Modal>
                <div className="container">
                    <div className="title">
                        <h4>{email}</h4>
                        <div >
                            <button onClick={() => setModal(false)} ><IoMdClose /></button>
                        </div>
                    </div>
                    <div>
                        <a href={calendly} target="_blank" rel="noreferrer">
                            <button className="btn btn-outline-success bg-success text-white m-2 my-3" type="submit" onClick={() => setModal(false)}>Pagar</button>
                        </a>
                    </div>
                    {children}
                </div>
            </Modal>
        </>)
}

export default Pay