import { useSelector, useDispatch } from 'react-redux';

import styles  from '../ContactList/ContactList.module.css';

import {deleteContact} from "../../redux/contacts/contacts.thunk";
import {selectContact,selectFilter} from "../../redux/contacts/contacts.selectors";

import Button from '@mui/material/Button';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const data = useSelector(selectContact);  

  const  getFilterContact =()=> {       
    return data.contacts.filter((contact)=>contact.name.toLowerCase().includes(filter));
  };
      
  const contacts = getFilterContact();  
     
  const handleDelete = (id)=> {        
    dispatch(deleteContact(id.target.name));    
  };
  
  return (
    <>     
      <div >
        <h2>Your contact list</h2>            
        {contacts.map(contact=>( 
          <div key={contact.id} className={styles.link}>
            <li> {contact.name} : {contact.number}</li>             
            <Button style={{marginLeft:15}} name ={contact.id} onClick={handleDelete}>Delete</Button>
          </div>           
        ))}         
      </div>     
    </>              
  );
};
  

  
 
  