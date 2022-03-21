import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { registerComentAsync } from '../redux/action/actionComents';
import { Form, FloatingLabel } from 'react-bootstrap';
import { getAuth } from 'firebase/auth';

const NewComent = () => {

    const dispatch = useDispatch()
    const data = getAuth()
    const [values, handleInputChange] = useForm({
        nameUser: data.currentUser.displayName,
        photoURL: data.currentUser.photoURL,
        opinion: '',
    })

    const { nameUser, photoURL, opinion } = values




    const handlePost = (e) => {
        e.preventDefault()
        dispatch(registerComentAsync(nameUser, photoURL, opinion))
    }



    return (
        <div>

            <div>
                <h3><strong>Escribir opinión de nuestros productos</strong></h3>

                <p>Comparte tu opinión con otros clientes</p>
                <Form>

                    <Form.Group>
                        <div className="form-group col-md-0">
                            <FloatingLabel controlId="floatingTextarea2" label="">
                                <Form.Control
                                    as="textarea"
                                    name="opinion"

                                    value={opinion}
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    onChange={handleInputChange}
                                />
                            </FloatingLabel>
                        </div>
                        <br />
                        <div>
                            <div className="d-flex gap-2 my-3">
                                <button className="btn btn-success border border-success " type="submit" onClick={handlePost}>Publicar opinión</button>
                            </div>
                        </div>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default NewComent