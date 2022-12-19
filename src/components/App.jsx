import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'services/operations';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './Contacts/ContactsList';
import { Filter } from './Filter/Filter';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


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
        {isLoading && !error && <b>Loading Phone contacts...</b>}
        <ContactsList />
      </Section>
    </div>
  );
};