import { useEffect } from "react";
import { useDispatch,useSelector} from "react-redux";

import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { UseMenu } from '../../components/UseMenu/UseMenu';

import { getError, getIsLoading } from "../../redux/contacts/contacts.selectors";
import { selectAuthToken } from "../../redux/auth/auth.selector";
import{selectProfile} from '../../redux/profile/profile.selector';
import { fetchContact } from "../../redux/contacts/contacts.thunk";

export const HomePage  =()=> {  
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);  
  const profile = useSelector(selectProfile);  
  const token = useSelector(selectAuthToken);
  
  useEffect(() => {      
    dispatch(fetchContact());     
  }, [ dispatch]);  

  return (    
    <div style={{color:"grey"}}>      
      {token && profile && (<UseMenu/>)}
      <div style={{textAlign:'center'}}>
        <h1>Welcome to the contact book!</h1> 
        <div style={{display:"flex", justifyContent:'space-around'} }>
          <div style={{display:"flex", flexDirection:'column'}}  >
            <ContactForm/>
            <div style={{marginTop:20}}>
             <Filter/> 
            </div>             
          </div>          
          <div>
            {isLoading && !error && <b>Request in progress....</b>}    
          <ContactList/>   
          </div>           
        </div>       
      </div>                   
    </div>
  );     
};
