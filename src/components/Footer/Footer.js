import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__block'>
        <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__wrapper'>
          <p className='footer__copyright'>&copy;2023</p>
          <div className='footer__links'>
            <a href='https://practicum.yandex.ru/' className='footer__link' target='blank'>Яндекс.Практикум</a>
            <a href='https://github.com/v3hesj' className='footer__link' target='blank'>Github</a>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
