const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Benvenuto nella pagina',
            color: 'textWhite',
            centerPage: 'container',
            link: "https://static.wikia.nocookie.net/5c9184c7-8976-42dd-a221-49bd59a7eb95/scale-to-width/755"
        }
    }
}).mount('#app')