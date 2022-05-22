import { MongoClient } from "mongodb";

const url = 'mongodb+srv://Junjie:wocao123@cluster0.szwsp.mongodb.net/test';
const dbName = 'DBtest';
const client = new MongoClient(url);

(async () => {
    try {   
        await client.connect();
        const db = client.db(dbName);
        const coll = db.collection('users');

        let add = await coll
        .insertOne(
            {
                username:'peterparker@dominio.es',
                password:'$2b$10$oBZSp9xQcnWrQZAKsIpuK.NzSNr8CFNE5SRv/mPmvjGKqzphJZ/He',
                timestamp:0,
                active: 1
            }
        );

        console.log("Connected successfully to server");
    } catch (err) {
        console.log(err.stack);
        console.log("No conecta :(");
    }

    client.close();
})();