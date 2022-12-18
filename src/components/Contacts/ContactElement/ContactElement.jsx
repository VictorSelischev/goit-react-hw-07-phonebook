import css from './ContactElement.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'services/operations';

export const ContactElement = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.contact__item}>
      <span className={css.contact__name}>
        {contact.name}: {contact.number}
      </span>
      <button type="button"
        onClick={handleDelete}
      >
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
