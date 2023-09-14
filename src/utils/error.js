export const RequestError = {
  SERVER_ERR_500: 'На сервере произошла ошибка',

  UPDATE_ERR_409: 'Пользователь с таким email уже существует.',
  UPDATE_DEFAULT: 'При обновлении профиля произошла ошибка.',
  UPDATE_SUCCESSULLY: 'Сохранено!',

  SIGNUP_ERR_409: 'Пользователь с таким email уже существует.',
  SIGNUP_DEFAULT: 'При регистрации пользователя произошла ошибка.',

  SIGNIN_ERR_401: 'Вы ввели неправильный логин или пароль.',
  SIGNIN_ERR_TOKEN: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
  SIGNIN_INVALID_TOKEN: 'При авторизации произошла ошибка. Переданный токен некорректен.',
  SIGNIN_DEFAULT: 'При входе произошла ошибка.',
};

export const RequestConfirm = {
  SUCCESS: 'Успешно!',
  SUCCESS_REGISTER: 'Вы успешно зарегистрировались!',
  UPDATE_SUCCESS: 'Ваши данные успешно изменены',
}

export const SearchMessageErr = {
  NO_KEY: 'Ведите ключевое слово',
  NOT_FOUND: 'Ничего не найдено',
  NOT_SAVED: 'Нет сохранённых фильмов',
  SEARCH_ERROR: 'Во время загрузки фильмов произошла ошибка.',
}