import { createSlice } from '@reduxjs/toolkit'

export const users = createSlice({
  name: 'users',
  initialState: [{
    id: 0,
    name: '',
    email: '',
    phone: ''
  }],
  reducers: {
    getUsersSlice:(state , action)=>{
        state = action.payload;
        return state; 
    },
    addUserSlice:(state , action)=>{
        state.push(action.payload);
        return state;
    },
    editUserSlice:(state , action)=>{
        state = state.map( i=>i.id == action.payload.id ? action.payload : i );
        return state;
    },
    deleteUserSlice:(state , action)=>{
        state = state.filter(i=>i.id !== action.payload );
        return state;
    }
  },
})

// Action creators are generated for each case reducer function
export const {getUsersSlice , addUserSlice , editUserSlice , deleteUserSlice } = users.actions

export default users.reducer