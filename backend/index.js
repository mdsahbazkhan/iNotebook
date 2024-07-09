const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')
connectToMongo(); 
const app = express()
const port =  5006;
const corsOptions = {
  origin: 'https://inotebook49.netlify.app', // Replace with your frontend URL for local development
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
};

// Apply CORS middleware
app.use(cors(corsOptions);

app.use(express.json())
//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening http://localhost:${port}`)
})
