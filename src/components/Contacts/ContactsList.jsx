import css from './ContactsList.module.css';
import { ContactElement } from './ContactElement/ContactElement';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul className={css.contact__list}>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          <ContactElement contact={contact} />
        </li>
      ))}
    </ul>
  );
};
