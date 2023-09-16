const express = require ('express')
const bodyParser = require ('body-parser')

const client = require('../database/connection')
const app = express ()

app.use(bodyParser.json())

app.listen(3000, () => {
    console.log("server running in port 3000")
})

client.connect(err => {
    if (err) {
        console.log(err.message)
    } else {
        console.log('Connected')
    }
})

app.get('/api/buku', (req, res) => {
    var query = `Select * from buku`
    client.query(query, (err, result) => {
        if(!err) {
            res.send(result.rows)
        }
    })
})

app.post('/api/buku', (req, res) => {
    const { tittle, description, author, price } = req.body
    var query = `insert into buku(tittle,description,author, price) VALUES('${tittle}', '${description}', '${author}', '${price}')`
    client.query(query, (err, result) =>{
        if(!err) {
            res.send('Insert Data Success')
        } else {
            // console.log("salah")
            res.send(err.message)
        }
    })
})

app.put('/api/buku/:id', (req, res) => {
    const { title, description, author, price } = req.body
    var query = `Update buku set title = '${title}', description = '${description}', author = '${author}', price = '${price}' where id = '${req.params.id}'`
    client.query(query, (err, result) => {
        if(!err) {
            res.send('Update Data Success')
        } else {
            res.send(err.message)
        }
    })
})

app.delete('/api/buku/:id', (req, res) => {
    var query = `delete from buku where id = ${req.params.id}`
    client.query(query, (err, result) => {
        if(!err) {
            res.send('Delete Data Success')
        } else {
            res.send(err.message)
        }
    })
})