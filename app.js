import express from 'express';
import sqlite3 from 'sqlite3';


const app = express();

app.use(express.static('./public'));

app.get('/api/stuff', (req, res) => {
    res.send({age: 20, name: 'Bill'});
});




app.listen(8000, () => {
    console.log('server listening on port 8000...');
})