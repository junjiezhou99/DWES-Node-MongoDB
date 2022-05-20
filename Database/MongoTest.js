import { MongoClient } from "mongodb";

const url = 'mongodb+srv://Junjie:wocao123@cluster0.szwsp.mongodb.net/test';
const client = new MongoClient(url);

class MongoDB {
    async getMovies(){
        try {
            console.log("Ha pasado por MongoTest!");

            await client.connect();
            const db = client.db('DBtest');
            const coll = db.collection('movies');

            let res = await coll.find({}, {projection:{_id:0}}).toArray();
            return res;

        } catch (error) {
            console.log(error.stack);
        }
        client.close();
    }

    async getMovieById(idMovie){
        try {
            console.log("Ha pasado por MongoTest!");

            await client.connect();
            const db = client.db('DBtest');
            const coll = db.collection('movies');

            let res = await coll.find({id:parseInt(idMovie)}).toArray();
            return res;

        } catch (error) {
            console.log(error.stack);
        }
        client.close();
    }

    async updateMovie(movie){
        try {
            console.log("Ha pasado por MongoTest!");

            await client.connect();
            const db = client.db('DBtest');
            const coll = db.collection('movies');

            let res = await coll.updateOne({id:movie.id}, {$set:{
                title:movie.title,
                genres:movie.genres,
                actors:movie.actors,
                year:movie.year,
                director:movie.director
            }})
            return res;

        } catch (error) {
            console.log(error.stack);
        }
        client.close();
    }

    async addMovie(movie){
        try {
            console.log("Ha pasado por MongoTest!");

            await client.connect();
            const db = client.db('DBtest');
            const coll = db.collection('movies');

            
            return res;

        } catch (error) {
            console.log(error.stack);
        }
        client.close();
    }
}

export default new MongoDB()