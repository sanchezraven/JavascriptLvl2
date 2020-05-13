<template>
    <div class="products">
        <product
        v-for="product of filtered"
        :key="product.id_product"
        :img="imgCatalog"
        :product="product"
        ></product>
    </div>
</template>

<script>
import product from './ProdItem.vue'

export default {
    data: function () {
        return {
            filtered: [],
            imgCatalog: 'https://placehold.it/200x150',
            products: []
        }
    },
    props: [],

    components: {
        product
    },

    methods: {
        filter (value) {
            let regExp = new RegExp (value, 'i')
            this.filtered = this.products.filter (el => regExp.test(el.product_name))
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
}
</script>