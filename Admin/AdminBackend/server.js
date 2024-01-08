const express = require('express');
const cors = require('cors');
const dbconnection = require('./Backend/config/databse');
const libRoutes = require('./Backend/routes/libroute');
const staffroute = require('./Backend/routes/staffroute');
const bodyParser = require('body-parser');
const app = express();

dbconnection();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));


// app.use('/api/librarian',cors(),libRoutes);
app.use('/api/staff',cors(),staffroute);

const port = 3001;
app.listen(port, () => console.log(`server is running on ${port}`))