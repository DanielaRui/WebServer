const http = require('http');

//res--response
//req--Guarda la url del servidor
//res--respuesta que el server da jsjsdjsj

http.createServer((req, res)=>{
    res.write("Hola gente uwu");
    res.end();
})
.listen(8080);
console.log('Escuchando el puerto, 8080');