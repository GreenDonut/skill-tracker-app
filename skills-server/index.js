const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("ur mom gay");
});


app.post('/hello', (req,res) => {
    res.send("ur mom gay");
})

app.post('/', (req,res) => {
    res.send("hello");
})

app.listen(port, () => console.log(`app listening on port ${port}!`));