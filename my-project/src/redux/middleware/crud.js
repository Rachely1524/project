import {axios} from 'axios';
export const addUser = ({ dispatch, getState }) => next => action => {
    let newUser;
    if (action.type === 'ADD_USER') {
        debugger
        axios.post('http://localhost:4200/newUser', action.payload)
            .then(res => {
                console.log(res.data);
                newUser = res.data
                dispatch(addUser(newUser))
            })
    }
    return next(action)
}

export const getAllUsers = ({ dispatch, getState }) => next => action => {
    let allUsers
    if (action.type === 'GET_ALL_USERS') {
        axios.get('http://localhost:4009/getAllUsers')
            .then(res => {
                console.log(res.data);
                allUsers = res.data
                dispatch(getAllUsers(allUsers))
            })
    }
    return next(action)
}





