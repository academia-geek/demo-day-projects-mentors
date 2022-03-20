import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Edit from '../modals/Edit';
import { listComentAsync, deleteAsync } from '../redux/action/actionComents';

const Opinions = ({ isLoggedIn }) => {

    const { coments } = useSelector((store) => store.coments)
    const [edit, setEdit] = useState([])
    const [modal, setModal] = useState(false)

    const dispatch = useDispatch()
    const data = getAuth()

    useEffect(() => {
        dispatch(listComentAsync())
    }, [dispatch])


    const handlePut = (opinion) => {
        const info = coments.find(l => l.opinion === opinion)
        setEdit(info)
        setModal(true)
    }

    return (
        <div>

            <div className="my-5">
                <div>
                    <h3>Opiniones de clientes</h3>
                </div>
                {
                    coments.map((e, i) => (
                        <div key={i}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: "20px 0px" }}>
                                <img src={e.photoURL} alt="user" width="80px" style={{ borderRadius: '50%' }} />
                                <div className="mx-3">
                                    <h4>{e.nameUser}</h4>
                                    <p>{e.opinion}</p>
                                </div>
                            </div>
                            <div>
                                {isLoggedIn && e.nameUser === data.currentUser.displayName ?
                                    <div>
                                        <button type="button" value="update" onClick={() => handlePut(e.opinion)} className="btn btn-success mx-2">
                                            Editar comentario
                                        </button>

                                        <button type="button" value="delete" onClick={() => dispatch(deleteAsync(e.opinion))} className="btn btn-success mx-2">
                                            Borrar comentario
                                        </button>
                                    </div>
                                    :
                                    ''
                                }

                            </div>
                        </div>
                    ))
                }
            </div>
            {
                modal === true ? <Edit edit={edit} setModal={setModal} name={data.currentUser.displayName} /> : ''
            }
        </div>
    )
}

export default Opinions
