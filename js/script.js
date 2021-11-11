/*
CREATE A CAROUSEL TO SHOW DIFFERENT PLACES AND DESCRIPTION
*/

var nicePlaces = new Vue (
    {
        el : '#container',
        data : {
            // counter to change active
            slideActive : 0,
            // objects array to create carousel
            slides: [
                {
                    image : "img/01.jpg",
                    title : "Svezia",
                    text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
                },
                {
                    image : "img/02.jpg",
                    title : "Svizzera",
                    text : "Lorem ipsum.",
                },
                {
                    image : "img/03.jpg",
                    title : "Gran Bretagna",
                    text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                },
                {
                    image : "img/04.jpg",
                    title : "Germania",
                    text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
                },
                {
                    image : "img/05.jpg",
                    title : "Paradise",
                    text : "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
                },
            ],
        },
        methods: {
            // function to go to the next image
            nextImg: function() {
                if(this.slideActive < this.slides.length - 1){
                    this.slideActive++;
                }else {
                    this.slideActive = 0;
                }
            },
            // function to go to the previous image
            prevImg: function() {
                if(this.slideActive === 0){
                    this.slideActive = this.slides.length - 1;
                }else {
                    this.slideActive --;
                }
            },
        }
    }
)