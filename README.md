# Тестовое задание: Система работы с обращениями (API)

## 🧭 <a name="nav"></a>Навигация:

- [Описание](#description)
- [Технологии](#technologies)
- [Структура проекта](#folders)
- [Установка](#installation)
- [API Endpoints](#endpoints)
- [Связаться со мной](#contact-me)

## 📌 <a name="description"></a>О проекте [⬆️](#nav)

API для управления обращениями с возможностью создания, изменения статуса, фильтрации и отмены обращений. Проект реализован на Node.js с использованием Express и TypeScript. Для работы с базой данных используется TypeORM.

## 🛠 <a name="technologies"></a>Технологии [⬆️](#nav)

- Node.js
- Express.js
- TypeScript
- TypeORM
- sqlite3

## 📂 <a name="folders"></a>Структура проекта [⬆️](#nav)

```
src/
├── config/           # Конфигурационные файлы
├── controllers/      # Контроллеры для обработки запросов
├── entity/           # Сущности БД (модели)
├── interfaces/       # Интерфейсы
├── repository/       # Репозиторий
├── routes/           # Маршруты API
├── services/         # Бизнес-логика (сервисы)
└── app.ts            # Основной файл приложения
```

## 💽 <a name="installation"></a>Установка проекта [⬆️](#nav)

1. Склонируйте репозиторий:
```bash
git clone https://github.com/BolotnikovMS/system-handling-requests.git
```
2. Установите зависимости:
```bash
npm install
```

3. Запустите приложение:
```bash
npm run dev
```
Приложение будет запущенно по адресу:

`http://localhost:6000`

## 🚀 <a name="endpoints"></a>API Endpoints [⬆️](#nav)

### 1. Создание обращения
Метод POST
```bash
http://localhost:6000/api/v1/appeals
```
Параметры:
- title (string) – тема обращения
- description (string) – текст обращения

Тело запроса:
```bash
{
"title": "Title",
"description": "Description"
}
```

### 2. Взять обращение в работу
Метод PATCH
```bash
http://localhost:6000/api/v1/appeals/id/take-work
```
id - необходимо подставить

### 3. Завершить обработку обращения
Метод PATCH

```bash
http://localhost:6000/api/v1/appeals/id/close
```
id - необходимо подставить

Тело запроса:
```bash
{
	"result": "Close"
}
```

### 4. Отмена обращения
Метод PATCH

```bash
http://localhost:6000/api/v1/appeals/id/cancel
```
id - необходимо подставить

Тело запроса:
```bash
{
	"cancellationMessage": "Cancel message"
}
```

### 5. Получить список обращении
Метод GET

```bash
http://localhost:6000/api/v1/appeals
```

Параметры для фильтрации:
- date - по конкретной дате (Формат: DD.MM.YYYY).
- dateStart, dateEnd - по диапазону дат (Формат: DD.MM.YYYY).

### 6. Отмена всех обращений со статусом "В работе"
```bash
http://localhost:6000/api/v1/appeals/cancel-all
```

## 📤 <a name="contact-me"></a>Связь со мной [⬆️](#nav)

[bolotnikovms@yandex.ru](mailto:bolotnikovms@yandex.ru)
