import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Search from '../components/Search'
import { profileAsync } from '../redux/action/actionProfile'

const ListMentors = () => {

    const dispatch = useDispatch()
    const { search } = useSelector(store => store.search)

    return (
        <div>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Busca Tu Mentor's</h1>

                        <Search />
                    </div>
                </div>
            </section >

            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-md-3 g-3">
                        <div>
                            <div style={{ flexWrap: 'wrap' }}>
                                {search.map((mentors) => (
                                    <div key={mentors.codeProfile}>
                                        <Link onClick={() => { dispatch(profileAsync(mentors.codeProfile)) }} to={"/profile/" + mentors.codeProfile} className="card-body btn btn-white m-2 border border-success">
                                            <button className="btn btn-white">
                                                <img src='https://files.lafm.com.co/assets/public/2020-01/abogado.jpg' style={{ width: '100%' }} alt="mentors" />
                                                <h5 className="card-text">{mentors.name}</h5>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="row row-cols-1">
                                                        <p>profesion</p>
                                                        <p>email</p>
                                                    </div>
                                                    <small className="text-muted">texto</small>
                                                </div>
                                            </button>
                                        </Link>
                                    </div>

                                ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default ListMentors