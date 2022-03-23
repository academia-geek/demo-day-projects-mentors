import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import NewComent from '../components/NewComent'
import Opinions from '../components/Opinions'
import Search from '../components/Search'
import { Bghome } from '../styles/StyledHome'

const Home = ({ isLoggedIn }) => {
    return (
        <Bghome>
            <div className='m-5'>
                <div className='row head1'>
                    <div className='col m-5'>
                        <h2 className='m-2'>
                            Encuentra tu <br />
                            Mentor ideal
                        </h2>
                        <h4 className='m-4'>
                            En línea o presencial, <br />
                            elige entre 17 millones de Mentores
                        </h4>
                        <Search />
                    </div>
                    <div className='col'>
                        <img src='https://res.cloudinary.com/dmdu8u7wo/image/upload/v1647620709/proyecto-final/Online_learning-bro_lqdqki.png' style={{ width: '70%' }} alt="mentors" />
                    </div>
                </div>
                <div className='row head2'>
                    <div className='col m-5'>
                        <img src='https://res.cloudinary.com/dmdu8u7wo/image/upload/v1647625466/proyecto-final/Online_learning-amico_e61krp.png' style={{ width: '70%' }} alt="mentors" />
                    </div>
                    <div className='col m-5'>
                        <h2 className='m-2'>
                            Mentores<br />
                            profesionales y calificados
                        </h2>
                        <h4 className='m-4'>
                            Más de un millón de alumnos han dado una calificación
                            5 estrellas a alguno de nuestros Mentor's
                        </h4>
                        <div className="d-grid gap-2 col-6 m-2">
                            <Link to="/list">
                                <button className="btn btn-success" type="button">Buscar tu Mentor's</button>
                            </Link>
                        </div>

                    </div>
                </div>
                {isLoggedIn &&
                    <NewComent />
                }
                <Opinions isLoggedIn={isLoggedIn} />
                <div className="section">
                    <div className="card text-center bg-dark text-white">
                        <div className="card-body">
                            <h5 className="card-title">Estudiante y mentor,
                                la combinación perfecta</h5>
                            <p className="card-text">Aprende y
                                Explora</p>
                            <a href="/" className="btn btn-success">Hagamoslo Realidad</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Bghome>
    )
}

export default Home