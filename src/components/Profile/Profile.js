import './Profile.css';
import useFormWithValidation from '../../utils/FormWithValidation';
import { useState, useContext, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Preloader from '../Preloader/Preloader';
import { mainApi } from '../../utils/MainApi';

const Profile = ({ handleSignout }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const userContext = useContext(CurrentUserContext).currentUser;
  
  const initValues = {
    username: userContext.name,
    email: userContext.email,
  };


  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation({ initValues });
  
  // console.log('userContext=',userContext,' userContext= ',userContext);
  
  function handleEdit(e) {
    e.preventDefault();
    setIsEdit(true);
  }
  // if (!isEdit) {
  //   values.username = initValues.username;
  //   values.email = initValues.email;
  //   console.log(values.username,values.email)
  // }

  const buttonSaveActive = () => {
    return ((values.username !== initValues.username || values.email !== initValues.email) && isValid && !isLoading)
  }

  console.log(values.username,initValues.username,'isEdit=',isEdit,'isLoading=',isLoading);
  
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    mainApi.updateUserInfo({
      name: values.username,
      email: values.email,
    })
      .then((data) => {
        // console.log(data.user.name)
        // values.username = data.user.name;
        // values.email = initValues.email;
        setIsEdit(false);
        resetForm({
          username: data.user.name,
          email: data.user.email,
        })
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setIsLoading(false))
  }
  // console.log(userContext.name)
  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, {`${userContext.name}!`}</h1>
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
              placeholder={initValues.email}
              disabled={isLoading || !isEdit} />
        </div>
        {isLoading ? <Preloader /> : ''}
        <span className='profile__error'>{errors.username || errors.email}</span>

        {isEdit
          ?
          <button type='submit' className={`profile__button-save ${!buttonSaveActive() && 'profile__button-save_disabled'}`}>Сохранить</button>
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
