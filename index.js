const express = require('express');
const app = express();
let msg = require("./server")

app.route('/api/cats').get((req, res) => {
    console.log(msg.servidor());
    res.send({
        cats: [{ name: 'lilly' }, { name: 'lucy' }],
    })
})

//starting server
app.listen(8000, () => {
    console.log('Server started!')
})