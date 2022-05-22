import { MongoClient } from "mongodb";

const url = 'mongodb+srv://Junjie:wocao123@cluster0.szwsp.mongodb.net/test';
const dbName = 'DBtest';
const client = new MongoClient(url);

(async () => {
    try {   
        await client.connect();
        const db = client.db(dbName);
        const coll = db.collection('movies');

        await coll.drop();

        console.log("Connected successfully to server");
    } catch (err) {
        console.log(err.stack);
        console.log("No conecta :(");
    }

    client.close();
})();