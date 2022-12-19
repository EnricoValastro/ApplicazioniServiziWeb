const Movies = {
    data() {
        return{
            movies: []
        }
    },
    methods: {
        listMovies(){
            axios.get("http://localhost:3000/api/movies")
                .then(response => {
                    this.movies = response.data;
                    this.movies.forEach( (movie)=> {
                        if (movie.poster != null) {
                            movie.poster = movie.poster.replace(/http:\/\/ia.media-imdb.com/, "https://m.media-amazon.com");
                        }
                    });
                })
                .catch(error => (console.log(error)));
        },
        init(){
            this.listMovies();
        }
    },
    mounted(){
        this.init();
    },
    template:
        `
            <div class="row">
                <div class="col">
                    <div class="card" v-for="movie in movies" :key="movies._id">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img v-if="movie.poster" v-bind:src=movie.poster class="card-img" alt="">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{{ movie.title }}</h5>
                                    <p v-if="movie.hasOwnProperty('imdb') && movie.imdb.rating != null" class="card-text">{{movie.imdb.rating}}/10</p>
                                    <p class="card-text">{{ movie.plot }}</p>
                                    <p class="card-text">Release date: {{ movie.released }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        `
}