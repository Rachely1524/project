import produce from 'immer'


const initialState =
{
    users: []
}

export default produce((state, action) => {
    switch (action.type) {
        case 'ADD USER':
            debugger;
            state.users.push(action.payload)
            // state.users.push(action.payload)
            debugger
            break;


    }
}, initialState)






