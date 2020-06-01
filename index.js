//import express

const express = require('express');

//create a server
const server = express();

//middleware - how to parse json to the body
server.use(express.json());

let hubs = [
  {
    id: 1,
    name: 'Tiffany',
  },
  {
    id: 2,
    name: 'Corey',
  },
  {
    id: 3,
    name: 'Olivia',
  },
  {
    id: 4,
    name: 'Ava',
  },
  {
    id: 5,
    name: 'Antonio',
  },
];

//a function to handle a GET request
server.get('/', (req, res) => {
  res.send('Hello!!! Everyone from index.js');
});

server.get('/hubs', (req, res) => {
  res.status(200).json(hubs);
});

//axios.post(url, data, options ->)
server.post('/hubs', (req, res) => {
  //add data to body
  const hub = req.body;
  //push info to array/data
  hubs.push(hub);
  //response to user
  res.status(201).json(hubs);
});

server.delete('/hubs/:id', (req, res) => {
  const id = req.params.id;
  hubs = hubs.filter((hub) => hub.id !== Number(id));
  res.status(200).json(hubs);
});

//listen for incoming requests

const port = 8000;

server.listen(port, () => console.log(`\n == API on port ${port} == \n`));
