import React from 'react'

const Search = () => {
    return (
        <div>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Buscar Por Categoria" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Search