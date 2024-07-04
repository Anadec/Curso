const express = require('express')
const { Client } = require('pg')
require("dotenv").config()

const client = new Client({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})

const app = express()

const connectDB = async () => {
client
.connect()
.then(() => {
    console.log(' a conexao funcionou ');
}).catch((err) => {
    console.error('erro ao conectar na db')
});
}
connectDB()

app.get('/test-api', function (req, res){
    res.send('NOSSA API TA FUNCINANDO')
})

app.listen(8000)

















function filtrarPares(arr){
    nova_arr = []
for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
        nova_arr.push(arr[i])
    }
}

    return nova_arr

}
