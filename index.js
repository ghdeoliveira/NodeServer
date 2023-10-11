const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/index.html', (req, res) => {
    res.sendFile( __dirname + "/" + "index.html" )
})

app.get('/process_get', (req, res) => {
	// Prepare a saída no formato JSON
	response = {
		first_name:req.query.first_name,
		last_name:req.query.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

app.get('/', (req, res) => {
    res.send('Página Inicial')
})

app.get('/sobre', (req, res) => {
    res.send('Página Sobre')
})

app.post('/', (req, res) => {
    res.send('POST')
})

const server = app.listen(8081, () => {
    console.log('Exemplo Server porta 8081')
})