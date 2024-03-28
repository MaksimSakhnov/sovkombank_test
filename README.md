# sovkombank_test

## Демо

Доступно по [адресу](http://188.225.42.31:3000/) 

## СТЭК
Front
- React, TS, RTK, react-beautiful-dnd, tailwind

Back (https://github.com/MaksimSakhnov/sovkombank_test_back)
- NestJS, Postgres

Данные
- Файл из открытого доступа oxford-5k.csv (лежит в корне репозитория)

## Функционал

### Главная страница 

![image](https://github.com/MaksimSakhnov/sovkombank_test/assets/59773082/55afb763-e040-4dd2-866f-76a0faf2543c)

- Поиск (через запросы на сервер, фильтрация происходит на сервере)
- Фильтр частей речи
- Добавление в избранное (сохранение в localStorage)
- Пагинация

### Страница избранного

![image](https://github.com/MaksimSakhnov/sovkombank_test/assets/59773082/7ad6d937-aeb6-4730-ab07-b0940d6e1da2)

- Поиск (происходит на стороне клиента)
- Фильтр частей речи
- Убрать из избранного
- Перемещение карточек (сохранение порядка в localStorage), недоступен если применены фильтры
- Для перехода на главную, нажать Starred Words еще раз
