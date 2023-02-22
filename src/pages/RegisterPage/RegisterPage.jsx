import styles  from '../../Styles/Form.module.css';
import Notiflix from 'notiflix';

import { useState } from "react";
import { useNavigate} from "react-router-dom";
// import {useDispatch } from 'react-redux';
// import { authLoginThunk } from "redux/auth/auth.thunk";
import { publicApi } from 'http/http';

import Button from '@mui/material/Button';
import Link from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const initialState = {
  name: '',
  email: '',
  password: '',
};

export const RegisterPage =()=> { 
  const [value,setValue]=useState(initialState);
  const navigate = useNavigate();
  const [showPassword,setShowPassword]=useState('password');
  // const dispatch = useDispatch();

  const handleChange =event=>{
    const {value, name} = event.target;
    setValue(prev=>({...prev,[name]:value}))
  }

  const goToLogin = ()=>{
    navigate("/login",{replace:true});
  } 

  const handleFormSubmit = async (event)=>{     
    event.preventDefault(); 
      
    try { 
    await publicApi.post('/users/signup/',value) 
      Notiflix.Notify.info('Registration completed successfully!');
        // dispatch(authLoginThunk(...value));    
      navigate("/login",{replace:true});
    } catch (e) {                     
      Notiflix.Notify.failure('Sorry, your registration did not work. Try again.');
    }
  }

  return (
  <>  
    <form className={styles.form} onSubmit={handleFormSubmit}>       
      <p style={{textAlign:"center",fontSize:20, color:"grey"}}>REGISTRATION FORM</p>
      <div className="">
        <label htmlFor="name" className="">
          <p>Name</p>
        </label>
        <input
          id="name"
          type="name"
          name="name"
          className={styles.input}
          onChange={handleChange}
          value={value.name}
          placeholder="Search name..."       
        />
      </div>
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
      <RemoveRedEyeIcon className={styles.showPassword} type="button" onClick={()=>showPassword==='password'?setShowPassword('text'):setShowPassword('password')}>Show password</RemoveRedEyeIcon>          
      <div className={styles.flex}>
        <Button  className={styles.button} variant="contained"  type="submit">REGISTER</Button>
        <Link style={{color:"grey"}}component="button" variant="body2" onClick={goToLogin} >Have an account? Log in...</Link>
      </div>      
    </form>             
  </>            
  );    
}
    