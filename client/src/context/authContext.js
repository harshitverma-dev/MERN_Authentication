import React, { createContext, useEffect, useReducer } from 'react'

export const AuthUser = createContext();

export const authReducers = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload
            }
        case 'LOGOUT':
            return {
                user: null
            }
        default:
            return state
    }
}



const AuthContext = ({ children }) => {
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user){
            dispatch({
                type: 'LOGIN',
                payload: user
            })
        }
    }, [])
    const [authstate, dispatch] = useReducer(authReducers, {
        user: null
    })
    return (
        <AuthUser.Provider value={{ authstate, dispatch }}>
            {children}
        </AuthUser.Provider>
    )
}



export default AuthContext
