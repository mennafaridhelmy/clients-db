import { createSlice } from '@reduxjs/toolkit'

export const user = createSlice({
  name: 'user',
  initialState:{
    id: 0,
    name: "",
    email: "",
    phone: ""
  },    
  reducers: {
    setUserSlice:(state , action)=>{
        state = action.payload;
        return state;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserSlice } = user.actions

export default user.reducer