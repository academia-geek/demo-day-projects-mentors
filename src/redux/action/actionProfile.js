import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesMentors } from "../types/types"

export const profileAsync = (code) => {
    return async (dispatch) => {
        const prodCollections = collection(db, "mentors");
        const q = query(prodCollections, where("codeProfile", "==", code))

        const datos = await getDocs(q);

        const profile = [];
        datos.forEach((doc) => {
            profile.push(doc.data())
        })
        //console.log(profile);
        dispatch(profileSync(profile))
    }
}

export const profileSync = (profile) => {
    return {
        type: typesMentors.details,
        payload: profile
    }
}