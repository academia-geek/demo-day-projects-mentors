import { typesMentors } from '../types/types';
import { addDoc, collection } from "@firebase/firestore";
import { db } from '../../firebase/firebaseConfig';

//CREATE PRODUCT ----------------------------------------------

//Action Create Product Async
export const registerMentorAsync = (newMentor) => {
    console.log(newMentor);
    return (dispatch) => {
        addDoc(collection(db, "mentors"), newMentor)
            .then(resp => {
                dispatch(registerMentorSync(newMentor))
            })
            .catch(error => {
                console.log(error);
            })
    }
}

//Action Create Product Sync
export const registerMentorSync = (mentor) => {
    return {
        type: typesMentors.register,
        payload: mentor
    }
}