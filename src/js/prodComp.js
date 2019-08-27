const catalogItem = {
    props: ['img', 'thing'],
    template: `<div class="catalog-item">
                     <img src="img" alt="Some img">
                     <div class="desc">
                         <h3>{{ thing.product_name }}</h3>
                         <p>{{ thing.price }} $</p>
                         <button class="buy-btn" 
                         
                    </div>
                 </div>`
}


const catalog = {
    data (){
        return {
            imgCatalog: 'https://placehold.it/200x150',
            catalogUrl: `/catalogData.json`,
            catalogItems: [],
            API_URL: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
        }
    },
    components: {
        'catalog-item': catalogItem
    },
    methods: {

    },
    mounted () {
        this.$parent.getJSON (this.API_URL + this.catalogUrl)
			.then (data => {
				for (let el of data.contents) {
					this.catalogItems.push (el)
				}
			})
    },
    template: `
            <div>
                <div class="products">
                    <div class="product-item" v-for="product of filtered">
                        <img :src="imgCatalog" alt="Some img">
                        <div class="desc">
                            <h3> {{ thing.product_name }}</h3>
                            <p>{{ thing.price }} $</p>
                            <button class="buy-btn" @click="addProduct (product)">Купить</button>
                        </div>
                      
                    </div>
                    <catalog-item
                    v-for="product of catalogItems"
                    :key=product.id_product"
                    :img="imgCatalog"
                    :thing="product"
                    ></catalog-item>
                </div>
                
            </div>
    
    
    `
}

export default catalog