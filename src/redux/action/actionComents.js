import { addDoc, collection, deleteDoc, getDocs, query, where, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import { typesCom } from '../types/types'


// Asyn action register comentario
export const registerComentAsync = (nameUser, photoURL, opinion) => {
    return (dispatch) => {
        const item = {
            nameUser,
            photoURL,
            opinion
        }
        addDoc(collection(db, "comentarios"), item)
            .then(resp => {
                dispatch(registerComentSync(item))
                dispatch(listComentAsync())
            })
            .catch(error => {
                console.log(error)
            })
    }
}

// Sync action register comentario --------------------------------------
export const registerComentSync = (item) => {
    return {
        type: typesCom.register,
        payload: item
    }
}





// Asyn action list comentario
export const listComentAsync = () => {

    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "comentarios"));

        const comentarios = []
        querySnapshot.forEach((doc) => {
            comentarios.push({
                ...doc.data()
            })
        })
        //console.log(comentarios);
        dispatch(listComentSync(comentarios))
    }
}

// Sycn action list comentario ------------------------------------------
export const listComentSync = (coments) => {
    return {
        type: typesCom.list,
        payload: coments
    }
}





// Asyn action delete comentario
export const deleteAsync = (opinion) => {
    return async (dispatch) => {
        const artCollection = collection(db, "comentarios")
        const q = query(artCollection, where('opinion', '==', opinion))
        const data = await getDocs(q)
        data.forEach((docu) => {
            deleteDoc(doc(db, "comentarios", docu.id))
        })
        dispatch(deleteSync(opinion))
        dispatch(listComentAsync())
    }
}
// Sycn action delete comentario----------------------------------------
export const deleteSync = (opinion) => {
    return {
        type: typesCom.delete,
        payload: opinion
    }
}





// Async action update comentario
export const updateComentAsync = (name, opinion) => {
    return async (dispatch) => {
        const data = collection(db, "comentarios")
        const q = query(data, where("nameUser", "==", name))
        const dataQ = await getDocs(q)
        let id
        dataQ.forEach(async (docu) => {
            id = docu.id
        })
        const docRef = doc(db, "comentarios", id)
        await updateDoc(docRef, opinion)
            .then(() => updateComentSync(opinion))
        dispatch(listComentAsync())
    }
}

// Sycn action update comentario----------------------------------------
export const updateComentSync = (opinion) => {
    return {
        type: typesCom.update,
        payload: opinion
    }
}