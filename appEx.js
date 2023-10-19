const express = require('express')
const app = express()
const port = 8080;

//servir un contenido estatico
app.use(express.static('public'));
app.get('/',function(req,res){
    res.send('Home page')
});
app.get('/holamundo',function(req,res){
    res.send('Hola mundo aaa')
});
app.get('*', (req,res)=>{//Cualquier otra cosa en la ruta
    res.sendFile(__dirname + '/public/404.html')
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});