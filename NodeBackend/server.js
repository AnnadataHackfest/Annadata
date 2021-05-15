const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const fileupload = require('express-fileupload');
const cors = require('cors');

const app = express();
require('dotenv').config();

// Bodyparser middleware
app.use(express.json());
app.use(cors());
// fileupload middleware
app.use(
  fileupload({
    useTempFiles: true,
  })
);

// DB config
const db = process.env.MONGODB_URL || 'mongodb://localhost/annadata';

// connect to mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Mongoose connected..'))
  .catch((err) => console.log(err));

// use routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/weatherForecast', require('./routes/api/weatherForecast'));
app.use('/api/otp', require('./routes/api/otp'));
app.use('/api/upload', require('./routes/api/upload'));
app.use('/api/ambeedata', require('./routes/api/ambeedata'));

app.use('/api/questions', require('./routes/api/questions'));
app.use('/api/infos', require('./routes/api/infos'));

// serve static assets if we are in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
