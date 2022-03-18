import React from 'react'
import Footer from '../components/Footer'
import Search from '../components/Search'

const Home2 = () => {
    return (
        <div>
            <section class="py-5 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">Busca Tu Mentor's</h1>

                        <Search />
                    </div>
                </div>
            </section >

            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <img src='https://files.lafm.com.co/assets/public/2020-01/abogado.jpg' style={{ width: '100%' }} alt="mentors" />
                                    <p className="card-text">csadcfsefdrsfv</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">ir texto</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">texto</button>
                                        </div>
                                        <small className="text-muted">texto</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Home2