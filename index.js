const express = require('express');
const app = express();
let msg = require("./server")
const cors = require('cors')

/*CORS (Cross-Origin Resource Sharing) is a way for 
the server to say "I will accept your request, 
even though you came from a different origin." 
This requires cooperation from the server 
*/
//Multiple origin
var whitelistLocal = ['http://localhost:3000', 'http://localhost:4200', 'http://127.0.0.1:3000',
    'http://localhost', 'https://localhost'
]
var whitelist = [
        'https://languagesapp.herokuapp.com/', 'languagesapp.herokuapp.com',
        'https://languagesapp.herokuapp.com/palabras', 'languagesapp.herokuapp.com/palabras'
    ]
    //Multiple Origin
var corsOptionsMultiple = {
        origin: function(origin, callback) {
            if (whitelist.indexOf(origin) !== -1) {
                //if (whitelist.indexOf(origin) !== -1 || !origin) {
                callback(null, true)
            } else {
                callback(new Error('Not allowed by CORS...>'))
            }
        },
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
    }
    //LOCAL
var corsOptionsSingle = {
        //origin: 'http://localhost:4200',
        origin: '*',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
    }
    //app.use(cors(corsOptions))

function corsSingleOrOrigin(tipo) {
    if (tipo === "single")
        return cors(corsOptionsSingle)
    else if (tipo === "multiple")
        return cors(corsOptionsMultiple)
}

app.use('/', express.static(__dirname + '/angularLanguages'));

app.get('/api/u/:id/palabras', corsSingleOrOrigin("multiple"), (req, res) => {
    console.log(msg.servidor());
    palabras = [{
        name: "lilly"
    }, {
        name: "gerard"
    }, {
        name: "david"
    }]
    res.send(palabras)
})


//starting server
// app.listen(8000, () => {
//     console.log('Server started!')
// })

app.listen(process.env.PORT || 3000, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});