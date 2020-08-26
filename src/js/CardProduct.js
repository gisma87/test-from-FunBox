import Photo from '../images/Photo.webp'
import PhotoCat from '../images/PhotoCat.png'

import borderSelected from '../images/BorderSelected.svg'
import borderDisabled from '../images/BorderDisabled.svg'

export class CardProduct {
    constructor({productTag, productTitle, productSubtitle, productDescription, productSize, status, amount}, idCard) {
        this.productTag = productTag
        this.productTitle = productTitle
        this.productSubtitle = productSubtitle
        this.productDescription = productDescription
        this.productSize = productSize
        this.status = status
        this.amount = amount
        this.idCard = idCard

        this.create()
        this.card = document.querySelector(`#n${this.idCard}`)
        this.card.addEventListener('click', this.selectCard.bind(this))
        //для снятия слушателя - т.к. IE не поддерживает options:{onse:true} при навешивании слушателя
        this.mouseout = this.mouseout.bind(this)
    }

    // создание карточки и отрисовка на странице
    create() {
        const container = document.querySelector('.fullscreen__content')
        const block = `
          <div class="fullscreen__block product wiggle" id="n${this.idCard}" data-selected="false">
            ${this.defaultCard}
          </div>
        `
        container.insertAdjacentHTML('beforeend', block)
    }

    //шаблон карточки
    createTemplate(opt) {
        const arr = this.productDescription.map(el => {
            return `<p class="product__description">${el}</p>`
        }).join('')
        return `
            <p class="product__tag">${this.productTag}</p>
            <h2 class="product__title">${this.productTitle}</h2>
            <h3 class="product__subtitle">${this.productSubtitle}</h3>
                ${arr}
            <picture>
              <source type="image/webp" srcset=${Photo}>
              <img src=${PhotoCat} alt="cat" class="product__img">
            </picture>
            ${opt.variable || ''}
            <div class="product__border ${opt.goHover || ''}"></div>
            <div class="product__size">
              <p class="product__size-text">${this.productSize}</p>
              <p class="product__size-text product__size-text_font-size-small">кг</p>
            </div>
            <p class="product__label">${opt.label}</p>
        `
    }

    get defaultCard() {
        return this.createTemplate({label: this.status.defaultLabel, goHover: 'go-hover'})
    }

    get selectedCard() {
        return this.createTemplate({label: this.status.selectedLabel})
    }

    get disabledCard() {
        return this.createTemplate(
            {
                label: this.status.selectedLabel,
                variable: `<div class="product__overlay"></div>`
            })
    }

    //запускаем при клике на карточку
    selectCard(event) {
        // если не нажали на подпись
        if (!event.target.matches('.product__label')) {
            //если карточка не выделена
            if (this.card.getAttribute('data-selected') === 'false') {
                //если количество товара больше нуля
                if (+this.amount) {
                    this.card.innerHTML = this.selectedCard
                    const border = this.card.querySelector('.product__border')
                    const circle = this.card.querySelector('.product__size')
                    border.style.backgroundImage = `url(${borderSelected})`
                    circle.style.backgroundColor = "#d91667"
                    this.card.setAttribute('data-selected', 'true')
                    //добавляем класс для запуска анимации
                    this.card.classList.toggle('go')
                    //после проигрывания анимации убираем класс её запуска
                    setTimeout(() => this.card.classList.toggle('go'), 550)
                } else {
                    // блок выполняется если товара нет в products[i].amount
                    this.card.classList.add('go')
                    this.card.innerHTML = this.disabledCard
                    const border = this.card.querySelector('.product__border')
                    const circle = this.card.querySelector('.product__size')
                    circle.style.backgroundColor = "black"
                    border.style.backgroundImage = `url(${borderDisabled})`
                }
            } else {
                // если карточка выделена вешаем стили состояния hover и слушатель mouseout
                const tag = this.card.querySelector('.product__tag')
                tag.innerHTML = `<span style="color: #e62e7a;">Котэ не одобряет?</span>`
                this.card.addEventListener('mouseout', this.mouseout)
            }
        }
    }

    //возвращаем состояние defaultCard после selectedHover
    mouseout() {
        this.card.innerHTML = this.defaultCard
        this.card.setAttribute('data-selected', 'false')
        //вешаем класс запуска анимации и после проигрывания убираем его
        this.card.classList.toggle('go')
        setTimeout(() => this.card.classList.toggle('go'), 550)
        this.card.removeEventListener('mouseout', this.mouseout)
    }
}