import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Search from '../components/Search'

const Home = () => {
    return (
        <div><NavBar />
            <div className='m-5'>
                <div className='row'>
                    <div className='col m-5'>
                        <h2 className='m-2'>
                            Encuentra tu <br />
                            profesor ideal
                        </h2>
                        <h4 className='m-4'>
                            En línea o presencial, <br />
                            elige entre 18 millones de profesores
                        </h4>
                        <Search />
                    </div>
                    <div className='col'>
                        <img src='https://res.cloudinary.com/dmdu8u7wo/image/upload/v1647620709/proyecto-final/Online_learning-bro_lqdqki.png' style={{ width: '70%' }} alt="mentors" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col m-5'>
                        <img src='https://res.cloudinary.com/dmdu8u7wo/image/upload/v1647625466/proyecto-final/Online_learning-amico_e61krp.png' style={{ width: '70%' }} alt="mentors" />
                    </div>
                    <div className='col m-5'>
                        <h2 className='m-2'>
                            Profesores<br />
                            profesionales y calificados
                        </h2>
                        <h4 className='m-4'>
                            Más de un millón de alumnos han dado una calificación
                            5 estrellas a alguno de nuestros profes
                        </h4>
                        <div class="d-grid gap-2 col-6 m-2">
                            <button class="btn btn-success" type="button">Buscar tu Mentor's</button>
                        </div>

                    </div>
                </div>
                <div>
                    <div class="card text-center bg-dark text-white">
                        <div class="card-body">
                            <h5 class="card-title">Estudiante y profesor,
                                la combinación perfecta</h5>
                            <p class="card-text">Aprende y
                                Explora</p>
                            <a href="/" class="btn btn-success">Hagamoslo Realidad</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home