import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { HomePage} from './pages/HomePage/HomePage';
import {LoginPage} from './pages/LoginPage/LoginPage';
import {RegisterPage} from './pages/RegisterPage/RegisterPage';

import {PublicRoute} from './components/AuthRoute/PublicRoure';
import {PrivateRoute} from './components/AuthRoute/PrivateRoute';
import {Layout} from "./components/Layout/Layout";

import {selectAuthToken} from "./redux/auth/auth.selector";
import {getProfileThunk} from './redux/auth/auth.thunk'

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);

  useEffect(() => {    
    dispatch(getProfileThunk());       
  }, [token, dispatch]);

  return(
    <BrowserRouter   basename="goit-react-hw-08--phonebook">  
      <Layout>         
        <Routes> 
          <Route path='register' element={<PublicRoute redirectTo="/contacts" component={<RegisterPage/>}/>}/>
          <Route path='login' element={<PublicRoute redirectTo="/contacts" component={<LoginPage/>}/>}/>        
          <Route path='contacts' element={<PrivateRoute redirectTo="/login" component={<HomePage/>}/>}/>                               
        </Routes>             
      </Layout>      
    </BrowserRouter>
  );
};