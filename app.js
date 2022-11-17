import express from 'express';
import sqlite3 from 'sqlite3';
let sql = '';

const app = express();

app.use(express.static('./public'));



// sends food table upon loading home
app.get('/api/stuff', (req, res) => {
    
    const db = new sqlite3.Database('./food.db');
    db.serialize(() => {
        sql = `SELECT * FROM food`;
        db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });
    });
});












app.listen(8000, () => {
    console.log('server listening on port 8000...');
})