import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { loginReducers } from '../reducers/loginReducers';
import { registerReducers } from '../reducers/registerReducers';
import { searchReducers } from '../reducers/searchReducers';
import { comentsReducer } from '../reducers/comentsReducer'


const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducers,
    register: registerReducers,
    search: searchReducers,
    coments: comentsReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)