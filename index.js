const express = require('express')

const Blockchainapp = express();

Blockchainapp.get('/',(req,res) => res.send('Welcome to my Blockchain Application in JavaScript'));

Blockchainapp.listen('5000',() => console.log('Server started at port number 5000'));
