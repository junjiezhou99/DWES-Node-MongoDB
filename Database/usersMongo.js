import { MongoClient } from "mongodb";

const url = 'mongodb+srv://Junjie:wocao123@cluster0.szwsp.mongodb.net/test';
const client = new MongoClient(url);

class MongoDB {
    async getUsers(user){
        try {
            console.log("Ha pasado por MongoTest!");

            await client.connect();
            const db = client.db('DBtest');
            const coll = db.collection('users');

            let res = await coll.find({username:user.username}).toArray();
            return res;

        } catch (error) {
            console.log(error.stack);
        }
        client.close();
    }

    async createUser(user){
        try {
            console.log("Ha pasado por MongoTest!");

            await client.connect();
            const db = client.db('DBtest');
            const coll = db.collection('users');

            let res = await coll.insertOne(user);
            return res;

        } catch (error) {
            console.log(error.stack);
        }
        client.close();
    }
}

export default new MongoDB()