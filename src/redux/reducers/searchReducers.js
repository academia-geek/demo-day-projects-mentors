import { typesMentors } from "../types/types";

const initialState = {
    search: []
}

export const searchReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesMentors.search:

            return {
                search: action.payload
            }
        case typesMentors.details:
            return {
                search: action.payload
            }

        default:
            return state;
    }
}