const path = require('path');
const http = require('http');
const express = require('express');
const _ = require('lodash');

require('./config/config');

const publicPath = path.join(`${__dirname}/../public`);
const port = process.env.PORT;
const app = express();
const server = http.createServer(app);

app.use(express.static(publicPath));

// User Routes
//  POST New user (/user)
//  POST Login user ()
//  GET All users (/users)
//  GET User recipes (/user/:id/recipes)
//  GET User details (/user/:id) (auth)
//  Get My User details (/user/me) (auth)
//  PATCH My User details (/user/me) (auth)
//  DELETE Logout User (token) (auth)

// Recipe Routes
//  POST New Recipe (/recipe) (auth)
//  GET Recipe (/recipe)
//  GET All Recipes (/recipes)
//  GET Recipe comments (/recipe/:id/comments)
//  PATCH Recipe details (/recipe/:id) (auth)
//  DELETE Recipe (/recipe/:id) (auth)

// Recipe Book Routes?

server.listen(port, () => {
  console.log(`Started at port ${port}`);
});
