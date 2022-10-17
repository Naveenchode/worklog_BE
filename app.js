const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const route = require('./routes/index');
//const multer =require('multer');



const app = express();
app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.options('*',cors());





app.use(bodyparser.json());
app.use('/',route);
const port = process.env.port || 3000;
app.listen(port, ()=>{
  console.log(`App running on port ${port}....`);


app.get('/books', (req, res) => {
  res.send([
    {
      id: 1,
      title: "Harry Potter",
    }
  ])
});



});


module.exports = app
