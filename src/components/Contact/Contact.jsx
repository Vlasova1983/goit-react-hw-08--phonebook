
import styles  from '../Contact/Contact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {deleteContactsAction} from '../../redux/contacts/contacts.thunk';


export const Contact = () => { 
  const contacts = useSelector(state => state.contacts.data);  
  const {name,number} = contacts;
  const dispatch = useDispatch();  

  const handleDelete = id => {
    dispatch(deleteContactsAction(id));    
  };
  
  return (        
    <div className={styles.link}>
      <li> {name} : {number}</li> 
      <button className={styles.button} onClick={handleDelete}>Delete</button>
    </div>                  
  );
};

