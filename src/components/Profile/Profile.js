import './Profile.css';
import useFormWithValidation from '../../utils/FormWithValidation';
import { useState, useContext, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Preloader from '../Preloader/Preloader';
import { mainApi } from '../../utils/MainApi';
import { RequestError } from '../../utils/error';
import { RequestConfirm } from '../../utils/error';

const Profile = ({ handleSignout }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const {currentUser, setCurrentUser} = useContext(CurrentUserContext);
  const [currentError, setCurrentError]= useState('');

  const initValues = {
    username: currentUser.name,
    email: currentUser.email,
  };

  const { values, handleChange, errors, isValid } = useFormWithValidation({ initValues });

  useEffect(() => {
    values.username = currentUser.name;
    values.email = currentUser.email;
  },[currentUser.name,currentUser.email])
  
  function handleEdit(e) {
    e.preventDefault();
    setIsEdit(true);
    setCurrentError('');
  }

  const buttonSaveActive = () => {
    return ((values.username !== initValues.username || values.email !== initValues.email) && isValid && !isLoading)
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setCurrentError('');

    mainApi.updateUserInfo({
      name: values.username,
      email: values.email,
    })
      .then((data) => {
        setIsEdit(false);
        setCurrentUser({
          name: data.user.name,
          email: data.user.email,
        })
        setCurrentError(RequestConfirm.SUCCESS);
      })
      .catch((err) => {
        let message;
        switch (err.message) {
          case '409':
            message = RequestError.UPDATE_ERR_409;
            break;
          case '500':
            message = RequestError.SERVER_ERR_500;
            break;
          default:
            message = RequestError.UPDATE_DEFAULT;
        }
        setCurrentError(message);
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, {`${currentUser.name}!`}</h1>
      <form className='profile__form' onSubmit={handleSubmit}>
        <div className='profile__block'>
            <label htmlFor="name" className="profile__label">Имя</label>
            <input
              className="profile__input"
              value={values.username || ''}
              required
              id="name"
              name="username"
              type="text"
              minLength="3"
              maxLength="40"
              onChange={handleChange}
              pattern='^[a-zA-ZА-Яа-яЁё\s\-]+$'
              placeholder={initValues.username}
              disabled={isLoading || !isEdit} />
          </div>
          <div className='profile__block'>
            <label htmlFor="email" className="profile__label">E-mail</label>
            <input
              className="profile__input"
              value={values.email || ''}
              required
              id="email"
              name="email"
              type="email"
              minLength="8"
              maxLength="40"
              onChange={handleChange}
              pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
              placeholder={initValues.email}
              disabled={isLoading || !isEdit} />
        </div>
        {isLoading ? <Preloader /> : ''}
        <span className='profile__error'>{currentError}</span>

        {isEdit
          ?
          <button type='submit' disabled={!buttonSaveActive()} className={`profile__button-save ${!buttonSaveActive() && 'profile__button-save_disabled'}`}>Сохранить</button>
          :
          <button type='button' className='profile__button-edit' onClick={handleEdit}>Редактировать</button>
        }
        {!isEdit
          ?
          <button type='button' className='profile__button-exit' onClick={handleSignout}>Выйти из аккаунта</button>
          : ''
        }
        {/* <button type='button' className='profile__button-edit'>Редактировать</button>
        <button type='button' className='profile__button-exit'>Выйти из аккаунта</button> */}
      </form>
    </section>
  )
}


export  default Profile;
