import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
       user: JSON.parse(sessionStorage.getItem("authUser")) || {
        name: '',
        password: '',
        image: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        authUser: false
       }
    },
    reducers: {
        login(state,action){
            const userId = action.payload
            // const userValidation = /^[A-Za-z]{4,10}$/i.test(userId.name)
            // const passwordValidation = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(userId.password);
            const userValidation = 'milohuy'
            const passwordValidation = 'vomika68'
            state.user = userId
            if(!userValidation || !passwordValidation){
                state.user.authUser = false
            }
            else{
                state.user.authUser = true
                const saveState = JSON.stringify(userId)
                sessionStorage.setItem("authUser", saveState)
            }
        },
        logout(state){
            state.user ={
                name: '',
                password: '',
                image: '',
                authUser: false
            }
            sessionStorage.clear()
        }
    }
})
export const { login ,logout} = authSlice.actions
export default authSlice.reducer
