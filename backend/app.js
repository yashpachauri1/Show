const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')

const router = require('./routes/eventsRoutes')
dotenv.config()
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>{
    app.listen(process.env.PORT||8080, (error)=>{
        if(error) {
           console.log(error) 
        }
        else{
            console.log(`server is running on port ${process.env.PORT}`);
        }
    });
})


app.use(router);

