import css from './ContactsList.module.css';
import { ContactElement } from './ContactElement/ContactElement';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
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
