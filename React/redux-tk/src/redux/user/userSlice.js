import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {},
  }
  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        deleteData: (state)=>{
          state.value = {}
        }
        ,
        setData: (state,action)=>{
          state.value = {
            ...action.payload
          }
        }
    }

  })


export const { deleteData,setData } = userSlice.actions;

export default userSlice.reducer;