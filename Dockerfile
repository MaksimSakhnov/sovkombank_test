# Базовый образ с Node.js
FROM node:latest

# Устанавливаем рабочую директорию /app
WORKDIR /app

# Копируем файлы package.json и yarn.lock в рабочую директорию
COPY package.json yarn.lock ./

# Устанавливаем зависимости с использованием Yarn
RUN yarn install

# Копируем остальные файлы в рабочую директорию
COPY . .

ARG REACT_APP_BASE_URL
ENV REACT_APP_BASE_URL $REACT_APP_BASE_URL


# Собираем приложение для production
RUN yarn build

# Экспонируем порт 3000
EXPOSE 3000

# Запускаем приложение при запуске контейнера
CMD ["yarn", "start"]