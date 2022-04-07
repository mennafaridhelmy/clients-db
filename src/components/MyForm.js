import Container from "@mui/material/Container";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { setUserSlice } from "../redux/slice/user";
import { addUserSlice, editUserSlice } from "../redux/slice/users";
import { nanoid } from "@reduxjs/toolkit";
import { CREATE_USER, UPDATE_USER_BY_ID } from "../redux/types";


export const MyForm = () => {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    
    const handleChange = (prop) => (event) => {
        dispatch(setUserSlice({...user, [prop] : event.target.value}));
    }

    const handleSubmit = () =>{
        user.id === 0 ? dispatch({type:CREATE_USER, user:{ ...user,id: nanoid(8) }}): dispatch({type: UPDATE_USER_BY_ID, user });
        
        dispatch( setUserSlice({
            id:0,
            name:"",
            email:"",
            phone:""
        }));
    } 

    return (
        <Container className="form-section">
            <div className="form-title">
                <h2> ADD / UPDATE form </h2>
            </div>
            <div className="form-content">
                <Input value={user.id} disabled fullWidth />
                <Input onChange={handleChange('name')} placeholder="Enter Name" value={user.name} fullWidth />
                <Input onChange={handleChange('email')} placeholder="Enter Email" value={user.email} fullWidth />
                <Input  onChange={handleChange('phone')} placeholder="Enter phone" value={user.phone} fullWidth />
                <Button onClick={() => handleSubmit()} variant="contained" fullWidth>Submit</Button>
            </div>
        </Container>
    )
}