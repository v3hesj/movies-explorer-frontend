export const imagesUrl = 'https://api.nomoreparties.co';

export const apiTranslator  = (movie) => {
  const newMovie = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${imagesUrl}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${imagesUrl}${movie.image.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }
    return newMovie;
  }

