const app = Vue.createApp({
    data: function () {
        return {
            artistOne: 'by Alfonso',
            titleOne: 'Foggybrain',
            imageOne: './assets/images/michael-mouritz-unsplash.jpg',
            artistTwo: 'by Rachel',
            titleTwo: 'Plaidweather',
            imageTwo: './assets/images/daniel-j-schwarz-unsplash.jpg',
            inventory: 9,
            prints: [
                {
                    id: 'Canvases',
                    available: 'available'
                },
                {
                    id: '11x14\'s',
                    available: 'available'
                },
                {
                    id: '8x10\'s',
                    available: 'Not available',
                },
                {
                    id: '5x7\'s',
                    available: 'available',
                },
            ]
        };
    }
});