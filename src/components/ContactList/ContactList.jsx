import { useSelector, useDispatch } from 'react-redux';

import styles  from '../ContactList/ContactList.module.css';

import { deleteContact} from "../../redux/contacts/contacts.thunk";
import { getContacts } from "../../redux/contacts/contacts.selectors";
import { getFilter } from '../../redux/filter/filter.selector';

import Button from '@mui/material/Button';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const data = useSelector(getContacts);     

  const  getFilterContact =()=> {       
    return data.filter((contact)=>contact.name.toLowerCase().includes(filter));
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

  
  
  
  
 
  