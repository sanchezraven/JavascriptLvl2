<template>
    <div class="error-block">
        <p class="error-msg">
            <button class="close-btn" @click="text=''">&times;</button>
            {{ text }}
        </p>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            text: ''
        }
    },

    methods: {
        setError (error) {
            this.text = error
        }
    }
}
</script>