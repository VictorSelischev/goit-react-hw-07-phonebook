import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './Contacts/ContactsList';
import { Filter } from './Filter/Filter';
// import { save, load } from '../services/utilitsLocalStorage';

export const App = () => {
  // const CONTACTS_KEY = 'contacts';

  // const [contacts, setContacts] = useState(() => {
  //   return load(CONTACTS_KEY) ?? [];
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   save(CONTACTS_KEY, contacts);
  // }, [contacts]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#c0ddff',
      }}
    >
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactsList />
      </Section>
    </div>
  );
};