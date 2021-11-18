const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const movieRoute = require('./routes/movie')
const userRoute = require('./routes/user')




const app = express()
app.use(express.json())

dotenv.config()

// mongoose
//     .connect(process.env.MONGODB_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => console.log("Database connected!"))
//     .catch(err => console.log(err));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    console.log('Connected to MongoDB')
    console.log(err)
})

app.use("/api/movie", movieRoute)
app.use("/api/user", userRoute)

app.listen(4400, () => {
    console.log("Backend server is running")
})