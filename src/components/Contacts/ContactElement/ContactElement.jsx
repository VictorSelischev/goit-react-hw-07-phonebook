import css from './ContactElement.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactElement = ({ contact }) => {
  const dispatch = useDispatch();

  const handelDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div>
      <span className={css.contact__name}>
        {contact.name}: {contact.number}
      </span>
      <button type="button" onClick={handelDelete}>
        Delete
      </button>
    </div>
  );
};

ContactElement.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
