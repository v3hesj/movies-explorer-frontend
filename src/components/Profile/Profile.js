import './Profile.css';

const Profile = () => {

  return (
    <section className='profile'>
      <h1 className='profile__title'>Hello, Name</h1>
      <form className='profile__form'>
        <div className='profile__block'>
            <label htmlFor="name" className="profile__label">Имя</label>
            <input
              className="profile__input"
              value="Name"
              required
              id="name"
              name="name"
              type="text"
              minLength="3"
              maxLength="40" />
          </div>
          <div className='profile__block'>
            <label htmlFor="email" className="profile__label">E-mail</label>
            <input
              className="profile__input"
              value="pochta@yandex.ru"
              required
              id="email"
              name="email"
              type="email"
              minLength="8"
              maxLength="40" />
        </div>  
        <button type='button' className='profile__button-edit'>Редактировать</button>
        <button type='button' className='profile__button-exit'>Выйти из аккаунта</button>
      </form>
    </section>
  )
}


export  default Profile;
