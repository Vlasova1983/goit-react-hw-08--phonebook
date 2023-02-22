import styles  from '../../Styles/Form.module.css';

import Notiflix from 'notiflix';

import { useState} from "react";
import { useDispatch, useSelector} from 'react-redux';
import {Outlet ,useNavigate} from "react-router-dom";

import { authLoginThunk } from "redux/auth/auth.thunk";
import { selectAuthStatus } from "redux/auth/auth.selector";

import Button from '@mui/material/Button';
import Link from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const initialState = {    
  email: '',
  password: '',
};

export const LoginPage =()=> { 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(selectAuthStatus);
  const [value,setValue]=useState(initialState);
  const [showPassword,setShowPassword]=useState('password');
  
    
  const handleChange =event=>{
    const {value, name} = event.target;
    setValue(prev=>({...prev,[name]:value}))
  }

  const goToRegister = ()=>{
    navigate("/register",{replace:true});
  }

  const handleFormSubmit = async (event)=>{     
    event.preventDefault(); 
      
  try {
    await dispatch(authLoginThunk(value)).unwrap();
      Notiflix.Notify.info('Success!');        
    navigate('/contact');
    } catch {
      Notiflix.Notify.failure('Sorry, your logining did not work.Try again.');       
    }
  };

  return (
    <>
      {status === "loading" && <p>Loading ...</p>}
      <form className={styles.form} onSubmit={handleFormSubmit}>         
        <div className="">
          <label htmlFor="email" className="">
            <p>Login</p>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className={styles.input}
            onChange={handleChange}
            value={value.email}
            placeholder="Search login..."             
          />
        </div>
        <div className="">
          <label htmlFor="password" className="">
            <p>Password</p>
          </label>
          <input
            id="password"
            type={showPassword}
            name="password"
            className={styles.input}                        
            onChange={handleChange}
            value={value.password}
            placeholder="Search password..."             
          />
        </div>
        <RemoveRedEyeIcon className={styles.showPassword}  type="button" onClick={()=>showPassword==='password'?setShowPassword('text'):setShowPassword('password')}>Show password</RemoveRedEyeIcon>    
        <div className={styles.flex}>
          <Button  className={styles.button} variant="contained" type="submit"> LOGIN</Button>
          <Link style={{color:"grey"}}component="button" variant="body2" onClick={goToRegister} >Don't have an account? Sign up...</Link>
        </div>        
      </form>      
      <Outlet/>
    </>     
  );    
}
