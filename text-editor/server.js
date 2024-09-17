const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;
const filePath = path.join(__dirname, 'public', 'szoveg.txt');

// Middleware beállítása
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// GET végpont a szöveg megjelenítésére
app.get('/read', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Hiba történt a fájl olvasása közben.');
        }
        res.send(data);
    });
});

// POST végpont a szöveg mentésére
app.post('/save', (req, res) => {
    const newText = req.body.text;
    fs.writeFile(filePath, newText, 'utf8', (err) => {
        if (err) {
            return res.status(500).send('Hiba történt a fájl mentése közben.');
        }
        res.send('Szöveg mentve!');
    });
});

app.listen(port, () => {
    console.log(`Szerver fut a következő porton: http://localhost:${port}`);
});
