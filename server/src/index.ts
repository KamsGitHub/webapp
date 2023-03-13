import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/",(req,res)=>{
    res.send('Whaddup');
});

app.listen(port,()=>{
    console.log('Connected yo')
});