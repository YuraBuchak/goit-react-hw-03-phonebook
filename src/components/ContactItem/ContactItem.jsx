import PropTypes from 'prop-types';
import css from '../Phonebook.module.css';

export const ContactItem = ({ contact, onClick }) => {
  const { name, number, id } = contact;
  return (
    <li className={css.listItem}>
      {name}: <span className={css.number}>{number}</span>
      <button className={css.deleteBtn} onClick={() => onClick(id)}>
        X
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
