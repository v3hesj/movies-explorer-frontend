import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className='about-project'>
      <div className='about-project__block'>
        <h2 className='about-project__title'>О проекте</h2>
        <ul className='about-project__list'>
          
          <li className='about-project__item'>
            <h3 className='about-project__subtitle'>
              Дипломный проект включал 5 этапов
            </h3>
            <p className='about-project__text'>
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </li>

          <li className='about-project__item'>
            <h3 className='about-project__subtitle'>
              На выполнение диплома ушло 5 недель
            </h3>
            <p className='about-project__text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>

        <div className='about-project__grid'>
          <p className='about-project__cell about-project__cell_color-back'>1&nbsp;неделя</p>
          <p className='about-project__cell about-project__cell_color-front'>4&nbsp;недели</p>
          <p className='about-project__cell'>Back-end</p>
          <p className='about-project__cell'>Front-end</p>
        </div>
      </div>
    </section>
  )
};

export  default AboutProject;
