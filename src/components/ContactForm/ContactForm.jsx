import styles  from '../../Styles/Form.module.css';
import {useState} from "react";

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from "../../redux/contacts/contacts.thunk";
import { getContacts} from "../../redux/contacts/contacts.selectors";
import Button from '@mui/material/Button';

const getRandomID=()=> {
  return `${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const ContactForm =()=> { 
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name,setInName] = useState(''); 
  const [number,setInNumber] = useState('');
 
  const handleChange = event => {    
    const { name, value } = event.target;    
    name==='name'?setInName(value):setInNumber(value);      
  };

  const isContactInState = ({ name }) =>
    !!contacts.filter(({name: prevName}) => {return prevName === name}).length;

  const onSubmit = ({ name, number }) => { 
    if (isContactInState({ name })) {
      alert('Contact is in phonebook');
      return;    
    }   
    
    dispatch(
      addContact(
        {id:getRandomID(), name, number }   
      ), 
    );         
  };

  const handleFormSubmit = evt => {   
    evt.preventDefault();    
    onSubmit({ name, number });
    setInName('');
    setInNumber('');   
  }; 
   
  return (
    <form className={styles.form} onSubmit={ handleFormSubmit}>
      <h2>Form for adding contacts</h2>
      <div >
        <label htmlFor="name">
            <p>Name</p>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className={styles.input} 
          onChange={handleChange}
          value={name}
          placeholder="Search name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className="">
        <label htmlFor="number" className="">
          <p>Number</p>
        </label>
        <input
          id="number"
          type="tel"
          name="number"
          className={styles.input} 
          onChange={handleChange}
          value={number}
          placeholder="000-00-00"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>     
      <div className={styles.flex}>
        <Button  className={styles.button} variant="contained" type="submit"> ADD CONTACT</Button>
      </div>     
    </form>      
  );    
}

