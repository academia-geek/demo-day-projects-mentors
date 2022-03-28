import React from 'react'
import Footer from '../components/Footer'

const LandingPage = () => {
    return (
        <div>
            <div class="container col-xl-10 col-xxl-8 px-4 py-4">
                <div class="row align-items-center g-lg-5 py-5">
                    <div class="col-lg-7 text-center text-lg-start">
                        <h1 class="display-4 fw-bold lh-1 mb-3">Aumenta tus ingresos</h1>
                        <p class="col-lg-10 fs-4">Digitaliza tu negocio y atiende más clientes en todo el mundo.
                            Con Mentor's, la plataforma para llevar tu negocio freelance a internet en pocos pasos y sin complicaciones</p>
                        <div class="d-grid gap-1 text-center">
                            <button class="btn btn-success w-50" type="button">Registrarse</button>
                        </div>
                    </div>
                    <div class="col-md-10 mx-auto col-lg-5">
                        <img className='w-100' src='https://res.cloudinary.com/dmdu8u7wo/image/upload/v1648349074/Digital_presentation-pana_hzaqzg.png' alt="mentoria" />
                    </div>
                </div>
            </div>

            <div className='container row mx-5'>
                <div class=" col card border-success mx-5">
                    <div class="card-header bg-transparent border-success text-center">
                        <img className='w-50' src='https://res.cloudinary.com/dmdu8u7wo/image/upload/v1648482956/proyecto-final/Video_call-bro_vsidud.png' alt="card" />
                    </div>
                    <div class="card-body text-success">
                        <h5 class="card-title text-black">Mentorías personalizadas</h5>
                        <p class="card-text">Puedes tener sesiones 1 a 1 con founders expertos que resolverán tus dudas e impulsarán el crecimiento de tu Startup.</p>
                    </div>
                </div>
                <div class="col card border-success mx-5">
                    <div class="card-header bg-transparent border-success text-center">
                        <img className='w-50' src='https://res.cloudinary.com/dmdu8u7wo/image/upload/v1648483017/proyecto-final/Online_learning-pana_qlubim.png' alt="card" />
                    </div>
                    <div class="card-body text-success">
                        <h5 class="card-title text-black">Paga por sesión</h5>
                        <p class="card-text">Paga únicamente por sesiones individuales, sin contratos ni suscripciones.</p>
                    </div>
                </div>
                <div class="col card border-success mx-5">
                    <div class="card-header bg-transparent border-success text-center">
                        <img className='w-50' src='https://res.cloudinary.com/dmdu8u7wo/image/upload/v1648483058/proyecto-final/Online_world-amico_iba9hm.png' alt="card" />
                    </div>
                    <div class="card-body text-success">
                        <h5 class="card-title text-black">Dónde quieras, cuándo quieras</h5>
                        <p class="card-text">Recibe mentoría de founders expertos desde tu oficina, casa o donde sea que estés.</p>
                    </div>
                </div>
            </div>

            <div class="container col-xl-10 col-xxl-8 px-4 py-5">
                <div class="row align-items-center g-lg-5 py-5">
                    <div class="col-lg-7 text-center text-lg-start">
                        <h1 class="display-4 fw-bold lh-1 mb-3">Digitaliza tu negocio, aumenta tus ingresos y atiende más clientes en todo el mundo.</h1>
                        <p class="col-lg-10 fs-4">Con Mentor's, la plataforma para llevar tu negocio freelance a internet en pocos pasos y sin complicaciones..</p>
                    </div>
                    <div class="col-md-10 mx-auto col-lg-5">
                        <form class="p-4 p-md-5 border rounded-3 bg-light">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Contraseña</label>
                            </div>
                            <div class="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Recuerdame
                                </label>
                            </div>
                            <button class="w-100 btn btn-lg btn-success" type="submit">Comenzar Ahora</button>
                            <hr class="my-4" />
                            <small class="text-muted">Al hacer clic en Registrarse, acepta los términos de uso.</small>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage