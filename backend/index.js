const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')
connectToMongo(); 
const app = express()

// const corsOptions = {
//   origin: 'https://inotebook49.netlify.app', // Replace with your frontend URL for local development
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type'],
// };

// Apply CORS middleware
app.use(cors();

app.use(express.json())
//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
const port =  process.env.PORT || 5006;

app.listen(port, () => {
  console.log(`iNotebook backend listening http://localhost:${port}`)
})
