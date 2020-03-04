﻿//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json'

//function makeGETRequest(url, cb) {
//    let xhr;
//    if (window.XMLHttpRequest) {
//      xhr = new XMLHttpRequest();
//    } else if (window.ActiveXObject) { 
//      xhr = new ActiveXObject("Microsoft.XMLHTTP");
//    }
//    xhr.onreadystatechange = function () {
//      if (xhr.readyState === 4) {
//        cb(xhr.responseText);
//      }
//    }
//  
//    xhr.open('GET', url, true);
//    xhr.send();
//  }

function makeGETRequest(url){
    return new Promise((res,rej) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhr.open('GET', url, true);
        xhr.send();
        
        xhr.onload = function () {
            if (this.status == 200) {
                res(this.responseText);
            } 
            else {
                let error = new Error(this.statusText);
                rej (error);
            }
        }
    
    })
}

class ProductsList{
    constructor() {
        this.products = [];
        this._init ()
    }

    _init () {
        this.fetchProducts ()
        this.render ()
    }
    fetchProducts (cb) {
        makeGETRequest(API_URL)
            .then(products => {this.products = JSON.parse(products)
            cb()})
            .catch(e =>{console.log(e)})
    }

    render() {
        const block = document.querySelector('.products');
        this.products.forEach(product => {
            let prod = new Product (product)
            block.insertAdjacentHTML('beforeend', prod.render ())
        })
    }
}

const catalog = new ProductsList ();
catalog.fetchProducts(()=>{
    catalog.render();
})


class Product {
    constructor(product) {
        this.product_name = product.product_name;
        this.price = product.price;
        this.img = image
    }

    render() {
        return `<div class="product-item">
                        <img src="${this.img}" alt="Some img">
                        <div class="desc">
                            <h3>${this.product_name}</h3>
                            <p>${this.price} $</p>
                            <button class="buy-btn"
                            data-name="${this.title}"
                            data-image="${this.img}"
                            data-price="${this.price}">Купить</button>
                        </div>
                    </div>`
    }
}

//создание товара

/* function createProduct (i) {
    return {
        id: ids[i],
        name: items[i],
        price: prices[i],
        img: image,
        quantity: 0,
        createTemplate: function () {
            return `<div class="product-item" data-id="${this.id}">
                        <img src="${this.img}" alt="Some img">
                        <div class="desc">
                            <h3>${this.name}</h3>
                            <p>${this.price} $</p>
                            <button class="buy-btn" 
                            data-id="${this.id}"
                            data-name="${this.name}"
                            data-image="${this.img}"
                            data-price="${this.price}">Купить</button>
                        </div>
                    </div>`
        },

        add: function() {
            this.quantity++
        }
    }
};
 */

 
//глобальные сущности корзины и каталога (ИМИТАЦИЯ! НЕЛЬЗЯ ТАК ДЕЛАТЬ!)
//var userCart = [];
//var list = fetchData ();


//кнопка скрытия и показа корзины
//document.querySelector('.btn-cart').addEventListener('click', () => {
//    document.querySelector('.cart-block').classList.toggle('invisible');
//});
//кнопки удаления товара (добавляется один раз)
/*document.querySelector('.cart-block').addEventListener ('click', (evt) => {
    if (evt.target.classList.contains ('del-btn')) {
        removeProduct (evt.target);
    }
})
*/
//кнопки покупки товара (добавляется один раз)
//document.querySelector('.products').addEventListener ('click', (evt) => {
//    if (evt.target.classList.contains ('buy-btn')) {
//        addProduct (evt.target);
 //   }
//})



//рендер списка товаров (каталога)
/* function renderProducts () {
    let arr = [];
    for (item of list) {
        arr.push(item.createTemplate())
    }
    document.querySelector('.products').innerHTML = arr.join();
}

renderProducts (); */

//CART

// Добавление продуктов в корзину
/* function addProduct (product) {
    let productId = +product.dataset['id'];
    let find = userCart.find (element => element.id === productId);
    if (!find) {
        userCart.push ({
            name: product.dataset ['name'],
            id: productId,
            img: cartImage,
            price: +product.dataset['price'],
            quantity: 1
        })
    }  else {
        find.quantity++
    }
    renderCart ()
}

//удаление товаров
function removeProduct (product) {
    let productId = +product.dataset['id'];
    let find = userCart.find (element => element.id === productId);
    if (find.quantity > 1) {
        find.quantity--;
    } else {
        userCart.splice(userCart.indexOf(find), 1);
        document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
    }
    renderCart ();
}

//перерендер корзины
function renderCart () {
    let allProducts = '';
    for (el of userCart) {
        allProducts += `<div class="cart-item" data-id="${el.id}">
                            <div class="product-bio">
                                <img src="${el.img}" alt="Some image">
                                <div class="product-desc">
                                    <p class="product-title">${el.name}</p>
                                    <p class="product-quantity">Quantity: ${el.quantity}</p>
                                    <p class="product-single-price">$${el.price} each</p>
                                </div>
                            </div>
                            <div class="right-block">
                                <p class="product-price">${el.quantity * el.price}</p>
                                <button class="del-btn" data-id="${el.id}">&times;</button>
                            </div>
                        </div>`
    }

    document.querySelector(`.cart-block`).innerHTML = allProducts;
}
 */