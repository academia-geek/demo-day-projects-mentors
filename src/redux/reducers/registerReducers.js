import { types } from "../types/types";

export const registerReducers = (state = {}, action) => {
    switch (action.type) {
        case types.register:

            return {
                name: action.payload.name,
                lastname: action.payload.lastname,
                phone: action.payload.phone,
                celphone: action.payload.celphone,
                email: action.payload.email,
                password: action.payload.password
            };

        default:
            return state;
    }
}