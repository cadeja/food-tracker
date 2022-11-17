import sqlite3 from "sqlite3";
let sql = '';

// open the database
// const db = new sqlite3.Database('./food.db', (err) => {
//     if (err) {
//         return console.error(err.message);
//     }
//     console.log('connected to food database');
// });

//created table

// sql = `
//     CREATE TABLE food(
//         id INTEGER PRIMARY KEY,
//         ingredient TEXT NOT NULL,
//         quantity INTEGER,
//         expires TEXT,
//         added TEXT NOT NULL
//     )`

// db.serialize(() => {
//     db.run(sql, (err) => {
//         if (err) console.error(err.message);
//         console.log('created table');
//     })
// });

// sql = `
//     INSERT INTO food(ingredient,quantity,expires,added)
//     VALUES ('apple', 2, '2022', '2021'),
//            ('banana', 4, '2022', '2020'),
//            ('chocolate', 1, '2023', '2019')
// `

// db.serialize(() => {
//     db.run(sql, (err) => {
//         if (err) return console.error(err.message);
//         console.log('added values');
//     })
// })


const queryAll = () => {
    sql = `SELECT * FROM food`;
    let data = [];

    const db = new sqlite3.Database('./food.db');

    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }

        rows.forEach((row) => {
            data.push(row);
        });
    });
    
    // close the database connection
    db.close();
    return data;
}

export { queryAll };