import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => (
  <input onChange={handleChange} value={searchValue} type="search" />
);
