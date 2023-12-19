const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { PORT } = require('./config/serverConfig');
const { createUser } = require('./controller/userController');

const setupAndRunServer = () =>{

    const app = express();

    app.use(cors());

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.post('/users/create', createUser);

    app.listen(PORT, ()=>{
        console.log(`Server started at port number: ${PORT}`);
    });

};

setupAndRunServer();