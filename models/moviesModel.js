import messagesapp from "../data/messages.js";
import movie from '../Database/moviesMongo.js';

class MoviesModel {

    async getMovies() {
        console.log("---> moviesModel::getMovies");

        const movies = await movie.getMovies();

        return movies;
    }

    async getMovieById(id) {
        console.log(`---> moviesModel::getMovieById = ${id}`);

        const _movie = await movie.getMovieById(id);
        if (_movie.length == 0)
            throw new Error(messagesapp.movie_dosent_exist);

        return _movie;
    }

    async removeMovie(id) {
        console.log(`---> moviesModel::removeMovie = ${id}`);

        const index = await movie.removeMovie(id);

        return index;
    }


    getMovieBy(elem) {

        console.log(`---> moviesModel::getMovieBy = ${elem.value}`);


        const _movies = movie.getMovieBy(elem);

        _movies.forEach(element => {
            element.actors = actor.getActorsById(element.id).actors;

        });
        return _movies;
    }


    async createMovie(req) {
        console.log(`---> moviesModel::createMovie = ${req.id}`);

        const _movie = await movie.getMovieById(req.id);
        if (_movie.length > 0)
            throw new Error(messagesapp.movie_error_create);

        await movie.createMovie(req);

    }

    async updateMovie(req) {
        console.log(`---> moviesModel::updateMovie = ${req.id}`);

        const _movie = await movie.updateMovie(req);
        if (typeof _movie == 'undefined')
            throw new Error(messagesapp.movie_error_update);

    }

    getMoviesFromActor(req) {
        console.log(`---> moviesModel::getMoviesFromActor = ${req.id}`);

        let _movies = [];

        const movies_id = actor.getIDFromActor(req)
        movies_id.forEach(element => {
            _movies.push(movie.getMovieById(element.id));
        });

        return _movies;
    }

    addActors(req) {
        console.log(`---> moviesModel::addActors = ${req.id}`);

        actor.addActorToMovie(req)
        return this.getMovieById(req.id);

    }

}

export default new MoviesModel()