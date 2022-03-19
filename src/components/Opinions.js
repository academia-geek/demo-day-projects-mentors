import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listComentAsync, deleteAsync } from '../redux/action/actionComents';

const Opinions = ({ handleUpdate }) => {

    const { coments } = useSelector((store) => store.coments)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listComentAsync())
    }, [])

    return (
        <div>

            <div>
            <div>
                <h3>Opiniones de clientes</h3>
            </div>
            
            {

                (coments) ?
                
                    (
                        
                        coments.map((e, i) => (
                    <div key={i}>
                <div>
                    <img src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1646189827/sprint3/profile-2_ywaxlb.jpg" alt="user" />
                    <p>{e.p}</p>
                </div>

                <div>
                    <h3><strong>{e.h3}</strong></h3>
                    <p>{e.opinion}</p>
                </div>

                <div>
                    <p>A 45 personas les resultó útil</p>
                    <p>Informar de un abuso</p>
                    
                    <div>
                        <button type="button"
                                 value="update"
                                 onClick={() => handleUpdate(e)}
                        >
                            Editar comentario
                        </button>
                        
                        <button type="button"
                                   value="delete"
                                   onClick={() => dispatch(deleteAsync(e.emailuser))}
                        >
                            Borrar comentario
                        </button>
                    </div>
                    
                </div>
                    </div>
                        ))
                            
                    ) :
                    <p>Unavailable data</p>
            }
            </div>
        </div>
    )
}

export default Opinions
