import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Search from '../components/Search'

const Home2 = () => {
    return (
        <div>
            <NavBar />
            <section class="py-5 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">Busca Tu Mentor's</h1>

                        <Search />
                    </div>
                </div>
            </section >

            <div class="album py-5 bg-light">
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div class="col">
                            <div class="card shadow-sm">
                                <div class="card-body">
                                    <img src='https://files.lafm.com.co/assets/public/2020-01/abogado.jpg' style={{ width: '100%' }} />
                                    <p class="card-text">csadcfsefdrsfv</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">ir texto</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">texto</button>
                                        </div>
                                        <small class="text-muted">texto</small>
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