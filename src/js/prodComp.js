const catalogItem = {
    props: ['img', 'thing'],
    template: `<div class="product-item">
                     <img :src="img" alt="Some img">
                     <div class="desc">
                         <h3>{{ thing.product_name }}</h3>
                         <p>{{ thing.price }} $</p>
                         <button class="buy-btn" @click = "$parent.addProduct(product)">Купить</button>
                         
                    </div>
                 </div>`
}


const catalog = {
    props:[],
    data (){
        return {
            filtered: [],
            imgCatalog: 'https://placehold.it/200x150',
            catalogUrl: `/catalogData.json`,
            products: [],
            API_URL: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
        }
    },
    components: {
        'catalog-item': catalogItem
    },
    methods: {
        addProduct (product) {
            this.$root.$refs.cart.addProduct (product)
        }
    },
    mounted () {
        this.$parent.getJSON (this.API_URL + this.catalogUrl)
			.then (data => {
				for (let el of data) {
                    this.products.push (el)
                    this.filtered.push (el)
				}
			})
    },
    template: `
            <div>
                <div class="products">
                <catalog-item
                    v-for="product of filtered"
                    :key="product.id_product"
                    :img="imgCatalog"
                    :thing="product"
                    ></catalog-item>
                </div>
                
            </div>
    
    
    `
}

export default catalog