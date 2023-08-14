import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'; 

const MoviesCardList = () => {
  return (
    <section className='cards'>
      <div className='cards__block'>
        <ul className='cards__list'>
          <MoviesCard />
        </ul>
        <button className='cards__more-button' type='button'>
          Ещё
        </button>
      </div>
    </section>
  )
}

export default MoviesCardList;