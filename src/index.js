import './styles/style.scss';
import {products} from "./js/products";
import {CardProduct} from "./js/CardProduct";

products.map((item, index) => {
    new CardProduct(item, index+1)
})

// для IE добавляем метод в прототип
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector;
}