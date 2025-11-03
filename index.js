const express = require('express')
const app=express()
const PORT=5000

app.get('', (req, res) => {
    res.send("HI");
});

app.use(express.json())

app.post('/api/data', (req, res)=>{
    res.send(req.body);
    console.log(req.body);
});

app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`)
});