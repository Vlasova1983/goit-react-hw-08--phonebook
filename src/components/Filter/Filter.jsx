import styles  from '../../Styles/Form.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { getFilter} from "../../redux/filter/filter.selector";
import { addFilter } from '../../redux/filter/filter.slice';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);   

    const handleFilter = event =>{                          
        dispatch(addFilter(event.target.value));
    };

    return (            
        <div className={styles.form}>
            <h2>Find contacts by name</h2>
            <label htmlFor="filter"/>               
            <input
                id="filter"
                type="text"
                name="filter"
                className={styles.input} 
                value={filter}
                onChange={handleFilter}               
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </div>         
    );
  };

