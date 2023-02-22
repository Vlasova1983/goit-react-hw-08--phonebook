import { useLocation,NavLink } from "react-router-dom";

export const Layout =({children})=> {
    const location = useLocation();
    return (
        <div style={{display:'flex', marginLeft:50,marginTop:100}}>       
            <div style={{fontSize:20,color:"#11a4ed",display:'flex', flexDirection: 'column',marginRight:50}}>
                <NavLink style={{color:"#11a4ed"}} state={{from:location}} to={`login`}>Login</NavLink>
                <NavLink style={{marginTop:30,color:"#11a4ed"}} state={{from:location}} to={`register`}>Register</NavLink>
            </div>             
            <div style={{width:'100%'}}>{children}</div>                  
        </div>
    )
}
 