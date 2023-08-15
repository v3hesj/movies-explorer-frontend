import { useNavigate  } from "react-router-dom";
import './ErrNotFound.css';

const ErrNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='err-not-found'>
      <div className='err-not-found__block'>
        <p className='err-not-found__title'>404</p>
        <p className='err-not-found__description'>Страница не найдена</p>
      </div>
      <button type='button' className='err-not-found__button' onClick={() => navigate(-1)}>Назад</button>
    </div>
  )
}

export  default ErrNotFound;
