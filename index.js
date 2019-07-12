const express = require('express');
const app = express();
let msg = require("./server")

app.route('/').get((req, res) => {
    console.log(msg.servidor());
    res.send("Hola mundo")
})

app.route('/api/cats').get((req, res) => {
    console.log(msg.servidor());
    res.send({
        cats: [{ name: 'lilly' }, { name: 'lucy' }],
    })
})


//starting server
// app.listen(8000, () => {
//     console.log('Server started!')
// })

// app.listen(process.env.PORT || 3000, function() {
//     console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });

app.listen(process.port, function() {
    console.log('Express server listening on %d, in %s mode', this.address().port, app.get('env'));
});