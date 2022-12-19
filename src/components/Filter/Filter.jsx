import css from './Filter.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setValueFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    dispatch(setValueFilter(value));
  };

  return (
    <label className={css.formAddBook__label}>
      Find contacts by name
      <input
        className={css.formAddBook__input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};
