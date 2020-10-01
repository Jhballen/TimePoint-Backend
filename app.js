//DECLARATIONS
const express = require('express');
const app = express();
const cors = require('cors');
require('./database/db.connection');

//MIDDLEWEARS
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//MAIN ROUTE
app.use(require('./routes/index'));

app.listen(process.env.PORT || 8082, ()=>{
    console.log('SERVER IS LISTEN ON PORT 8082');
});