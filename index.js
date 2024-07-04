const express = require('express')

const app = express()

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
