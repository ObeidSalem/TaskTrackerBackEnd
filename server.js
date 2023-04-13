const express = require('express');
const taskRoutes = require('./src/task/routes');
const cors = require('cors');

const app = express();

//to give access for ports to access your local host server
app.use(
    cors({
        origin: 'http://localhost:4200', // Grant access for a specific frontend port
        // origin: '*', // Grant access for any port if you wish
    })
)

app.use(express.json())

app.get('/', (req, res) => {

    // Bellow I were just were exploring different kind of methods
    // res.send("hello")
    // res.sendStatus(500)
    // res.status(404).send("Page not found")
    // res.status(404).json({ message: "Page not found"})
    // res.download("server.js") // will download server.js for the client
    // res.render("index")
    
})

// main url root of the application
app.use('/api/v1/tasks', taskRoutes)

//decide on which port to run the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`))