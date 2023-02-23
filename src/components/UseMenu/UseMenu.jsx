import styles from "../UseMenu/UseMenu.module.css"

import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import {selectProfile} from '../../redux/auth/auth.selector';
import {logoutThunk} from "../../redux/auth/auth.thunk";
import InputIcon from '@mui/icons-material/Input';

export const UseMenu =()=> {  
  const location = useLocation();  
  const profile = useSelector(selectProfile);
  
  const dispatch = useDispatch();     

  const handleLogout = () =>{                          
    dispatch(logoutThunk());
  };

  return (    
    <div className={styles.flex}>     
      <p style={{margin:0}}>{profile.email}</p>      
      <NavLink style={{marginTop:30,color:"#11a4ed",fontSize:20}} onClick={handleLogout} to={location.state?.from?? '/'} replace>
        <InputIcon></InputIcon>
      </NavLink>         
    </div>         
  );     
};
