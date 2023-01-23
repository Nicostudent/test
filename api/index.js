const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api')

const app = express();

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const cors = require('cors');  
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use('/api', apiRouter)


app.listen(3001, () => {
    console.log('server levantado')
})