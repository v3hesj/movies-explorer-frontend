class MainApi {
  constructor ({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getServerResponse (res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  
  getSavedMovies () {
    return fetch (`${this._baseUrl}/movies`, {
      headers: this._headers
    })
    .then(this._getServerResponse);
  }

  getUserInfo () {
    return fetch (`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    .then(this._getServerResponse);
  }

  updateUserInfo (data) {
    return fetch (`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify (data)
    })
    .then(this._getServerResponse);
  }

  // updateUserAvatar (avatar) {
  //   return fetch (`${this._baseUrl}/users/me/avatar`, {
  //     method: 'PATCH',
  //     headers: this._headers,
  //     body: JSON.stringify ({
  //       avatar: avatar
  //     })
  //   })
  //   .then(this._getServerResponse);
  // }

  addSaveMovie (movie) {
    return fetch (`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify (movie) 
    })
    .then(this._getServerResponse);
  }

  deleteSaveMovie (id) {
    return fetch (`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._getServerResponse);
  }

  checkToken (token) {
    return fetch(`${this._baseUrl}/users/me`,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`,
      }
    })
    .then(this._getServerResponse);
  }

  setToken() {
    this._headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
  }

  register (name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
    .then(this._getServerResponse);
  }

  authorize (email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email,password})
    })
    .then(this._getServerResponse);
  }

  // addLike (id) {
  //   return fetch (`${this._baseUrl}/cards/${id}/likes`, {
  //     method: 'PUT',
  //     headers: this._headers
  //   })
  //   .then(this._getServerResponse);
  // }

  // deleteLike (id) {
  //   return fetch (`${this._baseUrl}/cards/${id}/likes`, {
  //     method: 'DELETE',
  //     headers: this._headers
  //   })
  //   .then(this._getServerResponse);
  // }

  // changeLikeCardStatus (id, isLiked) {
  //   return isLiked ? this.addLike(id) : this.deleteLike(id);
  // }
}

export const mainApi = new MainApi({
  baseUrl: 'https://api.movies-service.nomoreparties.sbs',
  headers: {
    'Content-Type': 'application/json'
  }
});
