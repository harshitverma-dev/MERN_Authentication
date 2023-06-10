const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
require('./DB/connection');
const PORT = process.env.PORT || 2000

const friendRoutes = require('./routes/friend');


app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
// routes
app.use('/api/friends', friendRoutes);


// app.get('/', (req, res) => {
//     res.send('hello, from server side');
// })

app.listen(PORT, () => {
    console.log(`app is running on ${PORT} port`);
})
