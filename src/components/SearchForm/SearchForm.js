import './SearchForm.css';
import search from '../../images/search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormWithValidation from '../../utils/FormWithValidation';
import { useEffect }  from 'react';
import { useLocation } from 'react-router-dom';
import {SearchMessageErr} from '../../utils/error'

const SearchForm = ({ handleSearchMovies, handleCheckboxClick, isLoading, searchErr}) => {
  const { pathname } = useLocation();
  const {
    values, setValues, handleChange, isValid, setIsValid,
  } = useFormWithValidation();

  useEffect(() => {
    if (pathname === '/movies') {
      const localKeyWord = localStorage.getItem('localKeyWord');
      localKeyWord && setValues({search: localKeyWord});
      setIsValid(true);
    } else {
      setValues({search: ''});
    }
  }, [pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    isValid
      ? handleSearchMovies(values.search) 
      : searchErr(SearchMessageErr.NO_KEY)
  };
  // console.log('SearchForm=',values);

  return (
    <section className='search'>
      <div className='searh__content'>
        <div className='search__block'>
          <img src={search} alt='Поиск' className='search__logo search__logo-active' />
          <form
            className='search__form'
            name='search__form'
            noValidate
            onSubmit={handleSubmit}
          >
            <input
              className='search__input'
              type='text'
              name='search'
              id='search'
              value={values.search || ''}
              onChange={handleChange}
              minLength='1'
              maxLength='60'
              placeholder='Фильм'
              required
              disabled={isLoading}
            />
            <button
              className='search__button'
              type='submit' >
              Найти
            </button>
          </form>
          <FilterCheckbox handleCheckboxClick={handleCheckboxClick}/>
        </div>
      </div>
    </section>
  )
}

export default SearchForm;