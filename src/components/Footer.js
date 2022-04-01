import React from 'react'
import { BgFooter } from '../styles/StyledHome'

const Footer = () => {
    return (
        <div className="container">
            <BgFooter className="py-5">
                <div className="row header" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="col-2 section">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Inicio</a></li>
                            <li className="nav-item mb-2"><a href="/list" className="nav-link p-0 text-muted">Mentores</a></li>
                        </ul>
                    </div>

                    <div className="col-4 offset-1">
                        <form >
                            <h5>Suscribete a nuestro newsletter</h5>
                            <p>Recibirás noticias, descuentos y mucho más</p>
                            <div className="d-flex w-100 gap-2 footer">
                                <label for="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email" />
                                <button className="btn btn-success" type="button">Suscribete</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex justify-content-between py-4 my-4 border-top foot">
                    <p>&copy; Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex ">
                        <li className="ms-3"><a className="link-dark" href="/">twiter</a></li>
                        <li className="ms-3"><a className="link-dark" href="/">Instagram</a></li>
                        <li className="ms-3"><a className="link-dark" href="/">Facebook</a></li>
                    </ul>
                </div>
            </BgFooter>
        </div>
    )
}

export default Footer