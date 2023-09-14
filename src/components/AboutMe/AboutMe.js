import './AboutMe.css';
import photo from '../../images/batman.jpg';

const AboutMe = () => {
  return (
    <section className='about-me'>
      <div className='about-me__block'>
        <h2 className='about-me__title'>Студент</h2>
        <div className='about-me__content'>
          <div className='about-me__description'>
            <h3 className='about-me__name'>Антон</h3>
            <p className='about-me__job'>Фронтенд-разработчик</p>
            <p className="about-me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a href='https://github.com/v3hesj' className='about-me__link' target='blank'>
              Github
            </a>
          </div>
          <img src={photo} alt='Я Бэтмен' className='about-me__photo' />
        </div>
      </div>
    </section>
  )
};

export default AboutMe;
