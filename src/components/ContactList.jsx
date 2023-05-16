import { ContactItem } from './ContactItem';
import PropTypes from 'prop-types';

export const ContactList = ({ contactArrays, onClick }) => (
  <ul>
    <ContactItem contactArrays={contactArrays} onClick={onClick} />
  </ul>
);

ContactList.propTypes = {
  contactArrays: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
