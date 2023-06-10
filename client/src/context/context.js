import React, { createContext, useReducer } from 'react'

export const FriendsContext = createContext();

export const reducers = (state, action) => {
    switch (action.type) {
        case 'SET_FRIENDS':
            return {
                friends: action.payload
            }
        case 'CREATE_FRIENDS':
            return {
                friends: [action.payload, ...state.friends]
            }
        case 'DELETE_FRIENDS':
            return {
                friends: state.friends.filter(items => items._id !== action.payload._id)
            }
        default:
            return state;
    }
}
const MainContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducers, {
        friends: [],
    })
    return (
        <FriendsContext.Provider value={{ state, dispatch }}>
            {children}
        </FriendsContext.Provider>
    )
}

export default MainContext;
