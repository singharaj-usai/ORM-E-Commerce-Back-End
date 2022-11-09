const express = require('express');
const routes = require('./routes');
// import sequelize connection
// v from 01-Ins_Sequelize-Setup
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
//app.listen(PORT, () => {
//  console.log(`App listening on port ${PORT}!`);
//});

// v Same here 01-Ins_Sequelize-Setup
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening to ${PORT}'));
});

