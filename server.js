const express = require ('express');
const app = express();
const port = 3000;

app.get('/',(request, response) =>{
    response.send('Hellow Express :)');
});

app.listen(port,() => {
    console.log('Express server listeing on port ${port} !');
});