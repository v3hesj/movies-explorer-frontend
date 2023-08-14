import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

const Movies = () => {
  return(
    <main>
      <SearchForm />
       <MoviesCardList />
      {/* <Preloader /> */}
    </main>
  )
}

export default Movies;
