import { useEffect,Suspense} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { HomePage} from './pages/HomePage/HomePage';
import {LoginPage} from './pages/LoginPage/LoginPage';
import {RegisterPage} from './pages/RegisterPage/RegisterPage';
import {StartPage} from './pages/StartPage/StartPage';
import {PublicRoute} from './components/AuthRoute/PublicRoure';
import {PrivateRoute} from './components/AuthRoute/PrivateRoute';
import {Layout} from "./components/Layout/Layout";

import {selectAuthToken} from "./redux/auth/auth.selector";
import {getProfileThunk} from './redux/profile/profile.thunk'

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);

  useEffect(() => {    
    dispatch(getProfileThunk());       
  }, [token, dispatch]);

 return(
  <BrowserRouter   basename="goit-react-hw-08--phonebook">  
    <Layout> 
      <Suspense fallback={<p>Loading...</p>}>     
        <Routes> 
          <Route path="" element={<StartPage/>}/>
          <Route path='' element={<PublicRoute/>}>
            <Route path="register" element={<RegisterPage/>}/>
            <Route path="login" element={<LoginPage/>}/>
          </Route> 
          <Route path='' element={<PrivateRoute/>}>
            <Route path="contact" element={<HomePage/>}/> 
          </Route>                           
        </Routes>
      </Suspense>        
    </Layout>      
  </BrowserRouter>
 );
};