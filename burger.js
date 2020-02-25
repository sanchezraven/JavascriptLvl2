class Param {
    constructor (el) {
        this.name = el.value
        this.price = +el.dataset['price']
        this.calories = +el.dataset['calories']
    }
}

class Hamburger{
    constructor (size, add, topping) {
        this.size = new Param (this._select (size))
        this.add = new Param (this._select (add))
        this.topping = new Param (this._select (topping))
    };

    _select (name) {
        return document.querySelector (`input[name = "${name}"]:checked`);
    };

    _sumPrice () {
        let result = this.size.price + this.add.price + this.topping.price;
        return result;
    };

    _sumCalories () {
        let result = this.size.calories + this.add.calories + this.topping.calories;
        return result;
    };

    showSum (price, calories) {
        document.querySelector (price).textContent = this._sumPrice ();
        document.querySelector (calories).textContent = this._sumCalories ();
    }
}