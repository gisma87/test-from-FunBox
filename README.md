## Тестовое для FunBox.ru
## [Ссылка на страницу - gisma87.github.io/test-from-FunBox](https://gisma87.github.io/test-from-FunBox/ "корм для котэ") 
[Ссылка на ответы теста - Level 1](https://github.com/gisma87/test-from-FunBox/blob/master/answers.md "ответы на вопросы теста") 
*****
 Скачать тестовое задание целиком можно здесь: https://dl.funbox.ru/qt-html-css-js.zip.  
Браузеры: Chrome, Firefox, Safari, IE11; 
Стандарты: на ваше усмотрение; 
Структура проекта: на ваше усмотрение; 
Инструменты: любой сборщик на платформе Node.js; 
Библиотеки: приветствуется React, но можно и без него; 
Результат: ссылка на страницу, которая корректно отображается на любых современных десктопных компьютерах, смартфонах и планшетах, а также git-репозиторий с исходниками верстки. 

Task Requirements 
 
1. Фон занимает всю площадь экрана, блок находится по центру вертикально и горизонтально. 
2. На планшетах упаковки располагаются треугольником, на смартфонах друг под другом. 
3. Информация о продукте может меняться. 
4. Каждая из упаковок может быть выбрана или недоступна для выбора. Выбор осуществляется нажатием на упаковку или на текст «купи» в описании. 
5. Можно выбрать одновременно несколько упаковок, а также отменить свой выбор повторным нажатием на упаковку. 
6. Состояние наведения применяется к выбранной упаковке не сразу, а после того, как курсор ушел с нее после первоначального выбора. 
* * * * *
##### Статус карточки _disabled_ - когда "Товара нет" регулируется переменной **`amount`** в **`src/js/products.js`**
### Настройка сборки

```bash
# Делаем клон репозитория
$ git clone https://github.com/gisma87/test-from-FunBox.git

# переходим в папку склонированного проекта
$ cd test-from-FunBox

# установите зависимости
$ npm install

# запуск в режиме разработки
$ npm run dev
$ npm run start

# билд в режиме production
$ npm run build

# для деплоя
$ npm run deploy