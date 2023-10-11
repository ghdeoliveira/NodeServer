const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((req, res) => {
    
    const reqUrl = url.parse(req.url).pathname
    if(req.method == "GET") {
        if(reqUrl == "/"){
            fs.readFile('public/index.html', (err, data) => {
                res.writeHead(200,{'Content-type':'text/html'})
                res.write(data)
                return res.end()
            })
        }
        else if (reqUrl == "/sobre") {
            fs.readFile('public/sobre.html', (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write(data)
                return res.end()
            })
        }
        else {
            res.writeHead(404)
            res.end('PAGE NOT FOUND!')
        }
    }
}).listen(8081)

console.log('Servidor rodando na porta 8081')