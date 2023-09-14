import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>

        <li className='portfolio__item'>
          <a href='https://github.com/v3hesj/how-to-learn' className='portfolio__link' target='blank'>
            Статичный сайт
            <p className='portfolio__arrow'>↗</p>
          </a>
        </li>

        <li className='portfolio__item'>
          <a href='https://v3hesj.github.io/russian-travel/index.html' className='portfolio__link' target='blank'>
            Адаптивный сайт
            <p className='portfolio__arrow'>↗</p>
          </a>
        </li>

        <li className='portfolio__item'>
          <a href='https://mesto.express.nomoreparties.sbs' className='portfolio__link' target='blank'>
            Одностраничное приложение
            <p className='portfolio__arrow'>↗</p>
          </a>
        </li>

      </ul>
    </section>
  )
};

export  default Portfolio;
