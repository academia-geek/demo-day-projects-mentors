import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesMentors } from "../types/types"

export const searchAsync = (search) => {
    return async (dispatch) => {
        const collectionData = collection(db, "mentors")
        const q = query(collectionData, where("category", "==", search))
        const data = await getDocs(q)

        const mentors = []
        data.forEach((docu) => {
            mentors.push(docu.data())
        })
        dispatch(searchSync(mentors))
    }
}

export const searchEspecialidadAsync = (searchEspecialidad) => {
    return async (dispatch) => {
        const collectionData = collection(db, "mentors")
        const q = query(collectionData, where("especialidad", "==", searchEspecialidad))
        const data = await getDocs(q)

        const mentors = []
        data.forEach((docu) => {
            mentors.push(docu.data())
        })
        dispatch(searchSync(mentors))
    }
}

export const searchSync = (search) => {
    return {
        type: typesMentors.search,
        payload: search
    }
}