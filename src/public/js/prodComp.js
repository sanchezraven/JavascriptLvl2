const product = {
    props: ['img', 'product'],
    template: `<div class="product-item">
                     <img :src="img" alt="Some img">
                     <div class="desc">
                         <h3>{{ product.product_name }}</h3>
                         <p>{{ product.price }} $</p>
                         <button class="buy-btn" @click = "$parent.addProduct(product)">Купить</button>
                         
                    </div>
                </div>`
}


const products = {
    props:[],
    data (){
        return {
            filtered: [],
            imgCatalog: 'https://placehold.it/200x150',
            catalogUrl: `/catalogData.json`,
            products: []
        }
    },
    components: {
        product
    },
    methods: {
        addProduct (product) {
            this.$root.$refs.cart.addProduct (product)
        }
    },
    mounted () {
        this.$parent.getJSON (`/api/products`)
			.then (data => {
				for (let el of data) {
                    this.products.push (el)
                    this.filtered.push (el)
				}
			})
    },
    template: `
            <div class="products">
                <product
                v-for="product of filtered"
                :key="product.id_product"
                :img="imgCatalog"
                :product="product"
                ></product>
            </div>
    `
}

export default products;