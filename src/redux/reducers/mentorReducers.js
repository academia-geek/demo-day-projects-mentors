import { typesMentors } from '../types/types';

const initialState = {
    mentor: []
}
export const mentorReducers = (state= initialState, action) => {
    switch (action.type) {
        case typesMentors.register:
            return {
                mentor: [action.payload]
            }
        
        case typesMentors.list:
            return {
                mentor: [...action.payload]
            }
        default:
                return state;
        
  }
}

