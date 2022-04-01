import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Edit from '../modals/Edit';
import { listComentAsync, deleteAsync } from '../redux/action/actionComents';
import { BgOpinion } from '../styles/StyledHome';

const Opinions = ({ isLoggedIn, id }) => {

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
        <div className='d-flex justify-content-center'>
            <BgOpinion className="mt-5 w-75">
                {
                    coments.map((e, i) => (
                        id === e.id ?
                            <div className='shadow p-3 mb-5 bg-body rounded' key={i}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: "20px 0px" }}>
                                    <img src={e.photoURL} alt="user" width="80px" style={{ borderRadius: '50%' }} />
                                    <div className="mx-3">
                                        <h4>{e.nameUser}</h4>
                                        <p>{e.opinion}</p>
                                    </div>
                                </div>
                                <div>
                                    {isLoggedIn && e.nameUser === data.currentUser.displayName ?
                                        <div className="buttons">
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
                            :
                            ''
                    ))
                }
            </BgOpinion>
            {
                modal === true ? <Edit edit={edit} setModal={setModal} name={data.currentUser.displayName} /> : ''
            }
        </div>
    )
}

export default Opinions
