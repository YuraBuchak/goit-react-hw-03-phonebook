import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

export const Filter = ({ filter, onChange }) => (
  <label className={css.labelFilter}>
    <span className={css.labelSerch}>Serch contact</span>
    <input
      className={css.filterInput}
      type="text"
      name="filter"
      placeholder="Search contact"
      value={filter}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
