let http = require('http');

//req >> what will send to the server (params, queryparams,body)
//res>> what server will sendus back


let server = http.createServer((req, res) => {
    res.write('<h1>Hii from nodejs server</h1>')
    res.end()
})

server.listen(5679);