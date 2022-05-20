import { MongoClient } from "mongodb";

const url = 'mongodb+srv://Junjie:wocao123@cluster0.szwsp.mongodb.net/test';
const dbName = 'DBtest';
const client = new MongoClient(url);

(async () => {
    try {   
        await client.connect();
        const db = client.db(dbName);
        const coll = db.collection('movies');

        let add = await coll
        .insertMany(
            [
                {
                  "id": 1,
                  "title": "The Shawshank Redemption",
                  "genres": [
                    "Crime",
                    "Drama"
                  ],
                  "actors": [
                    "Tim Robbins",
                    "Morgan Freeman",
                    "Bob Gunton",
                    "William Sadler",
                    "Clancy Brown",
                    "Gil Bellows"
                  ],
                  "year": 1994,
                  "director": "Frank Darabont"
                },
                {
                  "id": 2,
                  "title": "The Godfather",
                  "genres": [
                    "Crime",
                    "Drama"
                  ],
                  "actors": [
                    "Marlon Brando",
                    "Al Pacino",
                    "James Caan",
                    "Richard S. Castellano",
                    "Robert Duvall",
                    "Sterling Hayden"
                  ],
                  "year": 1972,
                  "director": "Francis Ford Coppola"
                },
                {
                  "id": 3,
                  "title": "The Godfather Part II",
                  "genres": [
                    "Crime",
                    "Drama"
                  ],
                  "actors": [
                    "Al Pacino",
                    "Robert Duvall",
                    "Diane Keaton",
                    "Robert De Niro",
                    "John Cazale",
                    "Talia Shire"
                  ],
                  "year": 1974,
                  "director": "Francis Ford Coppola"
                },
                {
                  "id": 4,
                  "title": "The Dark Knight",
                  "genres": [
                    "Action",
                    "Crime",
                    "Drama",
                    "Thriller"
                  ],
                  "actors": [
                    "Christian Bale",
                    "Heath Ledger",
                    "Aaron Eckhart",
                    "Michael Caine",
                    "Maggie Gyllenhaal",
                    "Gary Oldman"
                  ],
                  "year": 2008,
                  "director": "Christopher Nolan"
                },
                {
                  "id": 5,
                  "title": "Schindler's List",
                  "genres": [
                    "Biography",
                    "Drama",
                    "History"
                  ],
                  "actors": [
                    "Liam Neeson",
                    "Ben Kingsley",
                    "Ralph Fiennes",
                    "Caroline Goodall",
                    "Jonathan Sagall",
                    "Embeth Davidtz"
                  ],
                  "year": 1994,
                  "director": "Steven Spielberg"
                }
              ]
        );

        console.log("Connected successfully to server");
    } catch (err) {
        console.log(err.stack);
        console.log("No conecta :(");
    }

    client.close();
})();