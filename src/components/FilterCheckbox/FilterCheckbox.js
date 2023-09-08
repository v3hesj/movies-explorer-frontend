import './FilterCheckbox.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FilterCheckbox = ({ handleCheckboxClick }) => {
  const { pathname } = useLocation();
  const [isChecked, setIsChecked] = useState(false);
  // console.log(isChecked);
  useEffect(() => {
    if (pathname === '/movies') {
      const checkboxIsShort = JSON.parse(localStorage.getItem('checkboxIsShort'));
      checkboxIsShort && setIsChecked(checkboxIsShort);
    } else {
      setIsChecked(false);
    }
  }, []);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    handleCheckboxClick(!isChecked);
  };

  return(
    <div className='checkbox'>
      <label className='checkbox__block'>
        <input
          className='checkbox__input'
          type='checkbox'
          onChange={handleCheckboxChange}
          checked={isChecked} />
        <div className="checkbox__slider round"></div>
      </label>
      <span className='checkbox__title'>Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;
