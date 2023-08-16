import './SearchForm.css';
import search from '../../images/search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <section className='search'>
      <div className='searh__content'>
        <div className='search__block'>
          <img src={search} alt='Поиск' className='search__logo search__logo-active' />
          <form
            className='search__form'
            name='search__form'
            noValidate
          >
            <input
              className='search__input'
              type='text'
              name='search'
              id='search'
              value={''}
              minLength='5'
              maxLength='60'
              placeholder='Фильм'
              required
            />
            <button
              className='search__button'
              type='submit'>
              Найти
            </button>
          </form>
          <FilterCheckbox />
        </div>
      </div>
    </section>
  )
}

export default SearchForm;