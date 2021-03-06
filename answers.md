### Ответы на вопросы

Здесь несколько теоретических вопросов, на которые нет однозначного ответа. С их помощью вы сможете в свободной форме рассказать нам о своем личном опыте в том или ином аспекте, а также проиллюстрировать рассказ примерами своих работ. 

**Q1**  Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения 
 - пользователя; 
 - менеджера проекта; 
 - дизайнера; 
 - верстальщика; 
 - клиентского программиста; 
 - серверного программиста. 
 
 ```
Ответ: 
 
 Хорошая вёрстка с точки зрения:
 - пользователя – отзывчивая, динамичная, реагирующая на действия, как бы ведущая по сайту, привлекающая внимание к главному.
 - менеджера проекта – гибкая, способная быстро подстроится под изменения в ТЗ.
 - дизайнера – соответствует макету
 - верстальщика – семантичный, адаптивный, кроссбраузерный, валидный код.
 - клиентского программиста - простой и понятный код
 - серверного программиста – хорошая скорость обработки кода
 
 Плохая вёрстка с точки зрения: 
 - пользователя – ломается, рассеивает внимание, плохо смотрится на разных устройствах
 - менеджера проекта – плохо подстраивается под изменения в ТЗ, к примеру заказчик попросил изменить цвет кнопок в формах. 
    При плохой вёрстке нужно искать все формы и в каждой менять класс, или свойства класса. 
 - дизайнера – большие, либо критичные расхождения с макетом.
 - верстальщика – непонятный, не семантичный, плохо читаемый код, свёрстанный на div’ах, 
    несоответствие названий классов их содержимому.
 - клиентского программиста – не понятные названия классов
 - серверного программиста – ‘медленный’ код
```

**Q2** Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. 
```
Для вёрстки крупных многостраничных сайтов необходим компонентный подход.
```
Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.  
```
React я ещё не изучал. 
В портфолио есть конкурсная работа для фонда Хабенского «РакЛечится» где мы с командой, 
в которой я был тимлидом, за 5 недель освоили новый стек технологий(Vue.js, Nuxt.js, Vuex) 
и на его основе написали полноценное приложение. 
В итоге из 22 команд до сдачи проекта дошло только 8, и мы были в их числе. 
Есть рекомендательное письмо от организатора проекта.
Хотя что-то с ходу написать на Vue, без гугления и документации я и сейчас не смогу, 
для хорошего понимания, требуется ступенчатое изучение. 
Так что могу сказать что я имею представление о фреймворках, что они делают, 
и какие проблемы решают но пока не умею это делать сам.
```
**Q3** Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать. 
```
При вёрстке применяю адаптивный подход, делаю блоки резиновыми на flex и где нужно на grid с переносом блоков, 
если не вмещаются. Использую медиа-запросы для постановки брейкпоинтов в моменты, когда нужно изменить дизайн 
и для поправки вёрстки на известных разрешениях. 
``` 
**Q4** Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода. 
```
Для написания использую WebStorm. Там встроенный Emmet, Prettier, и много чего ещё, о чём я не догадываюсь 
для проверки ошибок, быстрой навигации по коду, облегчения рефакторинга.
В браузере, конечно же Devtools, и на данны момент стоят приложения: JSON Viewer, PerfectPixel, 
Web Developer, React Developer Tools, Vue.js devtools, которые подключаю при необходимости.
ESLint ни разу ещё не настраивал.
```
**Q5** Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике? 
```
С подобными проблемами не сталкивался. Проверяю свои сайт в браузерах Chrome и Firefox на разных разрешениях 
с эмуляцией мобильных устройств. И только делая ваше тестовое проверял ещё и в IE. 
Но в любом случае такую ситуацию буду тестировать через DevTools отключая, или добавляя различные свойства.
```
**Q6** Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия? 
```
Уточнить вопросы по макету после первоначального анализа предстоящей работы. Если дизайнер затягивает с ответом, 
оставить этот вопрос, пока есть другая работа. Если ответа нет, а работу нужно сдать (думаю такого быть не может),
то сделаю, на своё усмотрение.
```
**Q7** Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). 
```
Читаю рекомендованные книги. На сегодняшний день прочитал: «JavaScript Подробное руководство», «Совершенный код», 
«Выразительный JavaScript», и последняя прочитанная - «Грокаем алгоритмы». 
Следующие к прочтению планирую серию книг «Вы не знаете JS». 
Подписан на Телеграм каналы: БЭМ, Defront, JavaScript, ForWeb и Javascript by Vladilen. 
Также подписки на тематические каналы в Slack. 
```
Какое направление развития вам более близко: JS-программирование, HTML/CSSверстка или и то, и другое? 
```
Интересно и то и другое 😊, но если выбирать, то развитие в направлении JS-программирования предпочтительней.
```
Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?
```
Даже не знаю что ответить про другие ‘области знаний’. Вот моя жизнь: Есть жена и пятилетний сын, 
вместе мы отдыхаем и изучаем мир 😊, есть работа, с помощью которой я за помощь другим людям получаю ресурсы 
для жизни и развития, есть учёба, необходимая, для того чтобы расти и открывать новые горизонты. 
Мне вполне хватает этих трёх областей. 
```
**Q8** Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами. 
```
Последние 2 года моим хобби является учёба и рост в направлении Frontend. 
До этого частенько пропадал в бумажных мирах LitRpg.
Самостоятелен, педантичен, систематичен. Занимаюсь спортом. 
По образованию Инженер-программист. Закончил обучение. Работу по специальности не нашёл. 
Открыл ИП, и занялся ремонтом ПК, фотомонтаж, и фото на документы. 
Давно хотел стать программистом, но всё не мог выгнать себя из зоны комфорта. 
В конце 2018 закрыл ИП, устроился на работу, не занимающую много времени и занялся учёбой в направлении frontend.
Посмотреть сделанные работы с описанием можно на github.com/gisma87
У меня нет опыта коммерческой разработки. 
Все работы представленные на гитхабе сделаны мной.
Мне предоставлялся лишь макет из Figma и описание требуемой функциональности. 
Учебных/тренировочных работ, на моём гитхабе нет.
```
 Ссылка на гитхаб [github.com/gisma87](https://github.com/gisma87 "корм для котэ") 
