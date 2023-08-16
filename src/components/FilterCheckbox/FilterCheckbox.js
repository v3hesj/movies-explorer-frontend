import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return(
    <div className='checkbox'>
      <label className='checkbox__block'>
        <input className='checkbox__input' type='checkbox' />
        <div class="checkbox__slider round"></div>
      </label>
      <span className='checkbox__title'>Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;
