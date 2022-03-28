import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
// import Search from '../components/Search'
import SearchEspecialidad from '../components/SearchEspecialidad'
import { profileAsync } from '../redux/action/actionProfile'
import { Mentors } from '../styles/styledMentors'

const ListMentors = () => {

    const dispatch = useDispatch()
    const { search } = useSelector(store => store.search)

    return (
        <Mentors>
            <section className=" text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Busca Tu Mentor's</h1>
                        <div className=" items-center">
                            {/* <Search /> */}
                            <SearchEspecialidad />
                        </div>
                    </div>
                </div>
            </section >

            <div className="album py-2 bg-light">
                <div className="container">
                    <div>
                        <div className="list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                            {search.map((mentors) => (
                                <div key={mentors.codeProfile} style={{ width: '25vw' }}>
                                    <Link onClick={() => { dispatch(profileAsync(mentors.codeProfile)) }} to={"/profile/" + mentors.codeProfile} className="card-body btn btn-white m-2 border border-success">
                                        <button className="btn btn-white">
                                            <img src={mentors.img} alt="mentors" width="250" height="200" />
                                            <h5 className="card-text py-2">{mentors.name}</h5>
                                            <div className="d-flex justify-content-between align-items-center info" style={{ height: '20vh' }}>
                                                <div className="row row-cols-1 ">
                                                    <p>{mentors.education}</p>
                                                    <p><strong>Correo:</strong> {mentors.email}</p>
                                                </div>
                                                {/* <small className="text-muted">texto</small> */}
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
            <Footer />
        </Mentors>

    )
}

export default ListMentors