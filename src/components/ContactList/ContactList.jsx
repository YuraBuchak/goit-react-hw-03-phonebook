import { ContactItem } from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';
import css from '../Phonebook.module.css';

export const ContactList = ({ contactArrays, onClick }) => {
  return (
    <>
      {contactArrays.length > 0 && (
        <ul>
          {contactArrays.map(contact => (
            <ContactItem key={contact.id} contact={contact} onClick={onClick} />
          ))}
        </ul>
      )}
      {contactArrays.length === 0 && (
        <p className={css.labelFilter}>No contacts!</p>
      )}
    </>
  );
};

ContactList.propTypes = {
  contactArrays: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
