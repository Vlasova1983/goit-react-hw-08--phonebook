import { useLocation,NavLink } from "react-router-dom";
import { selectAuthToken } from "../../redux/auth/auth.selector";
import {selectProfile} from '../../redux/auth/auth.selector';
import {useSelector} from "react-redux";


export const Layout =({children})=> {
    const location = useLocation();
    const profile = useSelector(selectProfile);  
    const token = useSelector(selectAuthToken);

    return (
        <div style={{ marginLeft:50,marginTop:100}}>         
            {!token && !profile && (<p style={{fontSize:30,color:"#11a4ed",textAlign:'center'}}>
            Hello! Register to continue. If you already have an account, you need to login.
            </p>)}
            <div style={{display:'flex'}}>
                <div style={{fontSize:20,color:"#11a4ed",display:'flex', flexDirection: 'column',marginRight:50}}>                
                    <NavLink style={{color:"#11a4ed"}} state={{from:location}} to={`login`}>Login</NavLink>
                    <NavLink style={{marginTop:30,color:"#11a4ed"}} state={{from:location}} to={`register`}>Register</NavLink>                
                </div> 
                <div style={{width:'100%'}}>{children}</div>
            </div>                                        
        </div>
    )
}
 