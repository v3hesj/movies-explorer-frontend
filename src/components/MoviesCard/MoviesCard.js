import './MoviesCard.css';
import cardImg1 from '../../images/cards/card1.svg'
import cardImg2 from '../../images/cards/card2.svg'
import cardImg3 from '../../images/cards/card3.svg'
import cardImg4 from '../../images/cards/card4.svg'
import cardImg5 from '../../images/cards/card5.svg'
import cardImg6 from '../../images/cards/card6.svg'
import cardImg7 from '../../images/cards/card7.svg'
import cardImg8 from '../../images/cards/card8.svg'
import cardImg9 from '../../images/cards/card9.svg'
import cardImg10 from '../../images/cards/card10.svg'
import cardImg11 from '../../images/cards/card11.svg'
import cardImg12 from '../../images/cards/card12.svg'
import cardImg13 from '../../images/cards/card13.svg'
import cardImg14 from '../../images/cards/card14.svg'
import cardImg15 from '../../images/cards/card15.svg'
import cardImg16 from '../../images/cards/card16.svg'

const MoviesCard = () => {
  return (
    <>
      <li className='card__item'>
        <a className='card__link' href='/' target='blank'>
          <img
            className='card__img'
            src={cardImg1}
            alt='33 слова о дизайне'
          />
        </a>
        <div className='card__wrapper'>
          <div className="card__content">
            <p className='card__title'>33 слова о дизайне</p>
            <button
              className='card__button-like'
              type='button'
            />
          </div>
          <p className='card__duration'>1ч 42м</p>
        </div>
      </li>

      <li className='card__item'>
        <a className='card__link' href='/' target='blank'>
          <img
            className='card__img'
            src={cardImg2}
            alt='Киноальманах «100 лет дизайна»'
          />
        </a>
        <div className='card__wrapper'>
          <div className="card__content">
            <p className='card__title'>Киноальманах «100 лет дизайна»</p>
            <button
              className='card__button-like'
              type='button'
            />
          </div>
          <p className='card__duration'>1ч 42м</p>
        </div>
      </li>

      <li className='card__item'>
        <a className='card__link' href='/' target='blank'>
          <img
            className='card__img'
            src={cardImg3}
            alt='В погоне за Бенкси'
          />
        </a>
        <div className='card__wrapper'>
          <div className="card__content">
            <p className='card__title'>В погоне за Бенкси</p>
            <button
              className='card__button-like'
              type='button'
            />
          </div>
          <p className='card__duration'>1ч 42м</p>
        </div>
      </li>

      <li className='card__item'>
        <a className='card__link' href='/' target='blank'>
          <img
            className='card__img'
            src={cardImg4}
            alt='Баския: Взрыв реальности'
          />
        </a>
        <div className='card__wrapper'>
          <div className="card__content">
            <p className='card__title'>Баския: Взрыв реальности</p>
            <button
              className='card__button-like'
              type='button'
            />
          </div>
          <p className='card__duration'>1ч 42м</p>
        </div>
      </li>

      <li className='card__item'>
        <a className='card__link' href='/' target='blank'>
          <img
            className='card__img'
            src={cardImg5}
            alt='Бег это свобода'
          />
        </a>
        <div className='card__wrapper'>
          <div className="card__content">
            <p className='card__title'>Бег это свобода</p>
            <button
              className='card__button-like'
              type='button'
            />
          </div>
          <p className='card__duration'>1ч 42м</p>
        </div>
      </li>

      <li className='card__item'>
        <a className='card__link' href='/' target='blank'>
          <img
            className='card__img'
            src={cardImg6}
            alt='Книготорговцы'
          />
        </a>
        <div className='card__wrapper'>
          <div className="card__content">
            <p className='card__title'>Книготорговцы</p>
            <button
              className='card__button-like'
              type='button'
            />
          </div>
          <p className='card__duration'>1ч 42м</p>
        </div>
      </li>

      <li className='card__item'>
        <a className='card__link' href='/' target='blank'>
          <img
            className='card__img'
            src={cardImg7}
            alt='Когда я думаю о Германии ночью'
          />
        </a>
        <div className='card__wrapper'>
          <div className="card__content">
            <p className='card__title'>Когда я думаю о Германии ночью</p>
            <button
              className='card__button-like'
              type='button'
            />
          </div>
          <p className='card__duration'>1ч 42м</p>
        </div>
      </li>

      <li className='card__item'>
        <a className='card__link' href='/' target='blank'>
          <img
            className='card__img'
            src={cardImg8}
            alt='Gimme Danger: История Игги и The Stooges'
          />
        </a>
        <div className='card__wrapper'>
          <div className="card__content">
            <p className='card__title'>Gimme Danger: История Игги и The Stooges</p>
            <button
              className='card__button-like'
              type='button'
            />
          </div>
          <p className='card__duration'>1ч 42м</p>
        </div>
      </li>

      <li className='card__item'>
        <a className='card__link' href='/' target='blank'>
          <img
            className='card__img'
            src={cardImg9}
            alt='Дженис: Маленькая девочка грустит'
          />
        </a>
        <div className='card__wrapper'>
          <div className="card__content">
            <p className='card__title'>Дженис: Маленькая девочка грустит</p>
            <button
              className='card__button-like'
              type='button'
            />
          </div>
          <p className='card__duration'>1ч 42м</p>
        </div>
      </li>

      <li className='card__item'>
        <a className='card__link' href='/' target='blank'>
          <img
            className='card__img'
            src={cardImg10}
            alt='Соберись перед прыжком'
          />
        </a>
        <div className='card__wrapper'>
          <div className="card__content">
            <p className='card__title'>Соберись перед прыжком</p>
            <button
              className='card__button-like'
              type='button'
            />
          </div>
          <p className='card__duration'>1ч 42м</p>
        </div>
      </li>

      <li className='card__item'>
        <a className='card__link' href='/' target='blank'>
          <img
            className='card__img'
            src={cardImg11}
            alt='Пи Джей Харви: A dog called money'
          />
        </a>
        <div className='card__wrapper'>
          <div className="card__content">
            <p className='card__title'>Пи Джей Харви: A dog called money</p>
            <button
              className='card__button-like'
              type='button'
            />
          </div>
          <p className='card__duration'>1ч 42м</p>
        </div>
      </li>

      <li className='card__item'>
        <a className='card__link' href='/' target='blank'>
          <img
            className='card__img'
            src={cardImg12}
            alt='По волнам: Искусство звука в кино'
          />
        </a>
        <div className='card__wrapper'>
          <div className="card__content">
            <p className='card__title'>По волнам: Искусство звука в кино</p>
            <button
              className='card__button-like'
              type='button'
            />
          </div>
          <p className='card__duration'>1ч 42м</p>
        </div>
      </li>

      <li className='card__item'>
        <a className='card__link' href='/' target='blank'>
          <img
            className='card__img'
            src={cardImg13}
            alt='Рудбой'
          />
        </a>
        <div className='card__wrapper'>
          <div className="card__content">
            <p className='card__title'>Рудбой</p>
            <button
              className='card__button-like'
              type='button'
            />
          </div>
          <p className='card__duration'>1ч 42м</p>
        </div>
      </li>

      <li className='card__item'>
        <a className='card__link' href='/' target='blank'>
          <img
            className='card__img'
            src={cardImg14}
            alt='Скейт — кухня'
          />
        </a>
        <div className='card__wrapper'>
          <div className="card__content">
            <p className='card__title'>Скейт — кухня</p>
            <button
              className='card__button-like'
              type='button'
            />
          </div>
          <p className='card__duration'>1ч 42м</p>
        </div>
      </li>

      <li className='card__item'>
        <a className='card__link' href='/' target='blank'>
          <img
            className='card__img'
            src={cardImg15}
            alt='Война искусств'
          />
        </a>
        <div className='card__wrapper'>
          <div className="card__content">
            <p className='card__title'>Война искусств</p>
            <button
              className='card__button-like'
              type='button'
            />
          </div>
          <p className='card__duration'>1ч 42м</p>
        </div>
      </li>

      <li className='card__item'>
        <a className='card__link' href='/' target='blank'>
          <img
            className='card__img'
            src={cardImg16}
            alt='Зона'
          />
        </a>
        <div className='card__wrapper'>
          <div className="card__content">
            <p className='card__title'>Зона</p>
            <button
              className='card__button-like'
              type='button'
            />
          </div>
          <p className='card__duration'>1ч 42м</p>
        </div>
      </li>

    </>
    
  )
}

export default MoviesCard