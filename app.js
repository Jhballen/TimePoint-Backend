//DECLARATIONS
const express = require('express');
const app = express();
require('./database/db.connection');
const router = require('./router');

//MIDDLEWEARS
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//MAIN ROUTE
app.use('/',router);

app.listen(8082, ()=>{
    console.log('SERVER IS LISTEN ON PORT 8082');
});