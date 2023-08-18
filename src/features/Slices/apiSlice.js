import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
    "apislice/getUsersData", 
    async () => {
        try {
          const response = await axios.get(
            "https://reqres.in/api/users/2"
          );
          if (response && response.data && response.data.data)
            return response.data.data;  
        } catch (error) {
          console.error(error);
        }});
export const addUser = createAsyncThunk(
    'apislice/addUserData',
    async (values)=>{
        try{
            const res = await axios.post('https://reqres.in/api/users',{values});
            console.log("Res data : ",res.data)
            return res.data
        }   
        catch (error) {
            console.error(error);
        }
    }
)
export const updateUser = createAsyncThunk(
    'apislice/updateUserData',
    async (values)=>{
        try{
            const res = await axios.put('https://reqres.in/api/users/2',{values})
            console.log("Res data : ",res.data)
            return res.data
        }
        catch(error){
            console.error(error);
        }
    }
)
export const apiSlice = createSlice(
    {
    name: 'apislice',
    initialState: {
        loading:true,
        userList: [],
        userObject: {},
        errormessage: '',
    },
    reducers: {},
    extraReducers: (builder)=> {
        builder.addCase(getUsers.pending,(state, action)=>{
            state.loading = true; 
        })
        .addCase(getUsers.fulfilled,(state, action)=>{
            const list = action.payload
            console.log("Action List: ",list[0])
            state.userList.push(
            //     {
            //     id: list[0].id,
            //     name: list[0].name,
            //     role: list[0].size,
            //     email: list[0].img,
            //     phone: list[0].text,
            // }
            list
            ) 
            state.isLoading = false;
        })
        .addCase(getUsers.rejected,(state, action)=> {
            state.errormessage = action.payload
            state.loading = false;
        })
        builder.addCase(addUser.pending,(state, action)=> {
            state.loading = true; 
        })
        .addCase(addUser.fulfilled,(state, action)=>{
            const value = action.payload.values
            const id = action.payload.id
            console.log("Action Value: ",action.payload.values)
            state.userList.push({
                id: id,
                email: value.email,
                first_name: value.first_name,
                last_name: value.last_name
            })     
        })
        .addCase(addUser.rejected,(state,action)=>{
            state.errormessage = "error "
            state.loading = false;
        })
        builder.addCase(updateUser.pending,(state, action)=> {
            state.loading = true; 
        })
        .addCase(updateUser.fulfilled,(state, action)=>{
            const value = action.payload.values
            // const id = action.payload.id
            console.log("Action Value: ",action.payload.values)
            state.userList.map(
                (user)=>{
                    user.email = value.email
                    user.first_name = value.first_name
                    user.last_name = value.last_name
            }
            )

        })
        .addCase(updateUser.rejected,(state,action)=>{
            state.errormessage = "error "
            state.loading = false;
        })
    }
    // reducers: {
    //     makeRequest(state,action){
    //         state.loading = true
    //     },
    //     failRequest(state,action){
    //         state.loading = false
    //         state.errormessage = action.payload
    //     },
    //     getUserList(state,action)
    //     {
    //         try{
    //             const list = action.payload
    //             console.log("List: ",list)
    //             state.loading = false
    //             state.errormessage = ''
    //             state.userList.push({
    //                 id: list.id,
    //                 name: list.name,
    //                 role: list.size,
    //                 email: list.img,
    //                 phone: list.text,
    //             })
    //         }
    //         catch (err){
    //             return err
    //         }
    //         // console.log("Action: ",action.payload)
            
    //     },  
        // FetchUserList(state,action){
        //     return (dispatch)=>{
        //         dispatch(makeRequest());
        //         axios.get('http://localhost:3000/user').then(res =>{
        //             const userlist=res.data;
        //             dispatch(getUserList(userlist))
        //         }).catch(err =>{
        //             dispatch(failRequest(err.message));
        //         })
        //     }
        // }
    // } 
})
// export const FetchUserList = createAsyncThunk('features/Slices/FetchUserList', async () =>{
//     try{
//         const reponse = await axios.get('http://localhost:3000/user')
//         return [...reponse.data]
//     }
//     catch(err){
//         return err.message
//     }
// })
// export const { makeRequest ,failRequest,getUserList} = apiSlice.actions
// export default apiSlice.reducer
export const selectUsers = (state) => (state.apislice.userList);
export const selectLoadingState = state => state.apislice.loading;
export const selectErrorState = state => state.apislice.errormessage;
export default apiSlice.reducer
