import express  from "express"
import cors from 'cors'
import { connectDB } from "./config/db.js"
import greetingRouter from "./routes/greetingRoute.js"
import homeRouter from "./routes/homeRoute.js"
import 'dotenv/config'

// app config
const app = express()
const port = process.env.PORT || 4000;


// middlewares
app.use(express.json())
app.use(cors())

// db connection
connectDB()

// api endpoints
app.use("/api/greeting", greetingRouter)
app.use("/api/home" , homeRouter)
app.use("/images",express.static('uploads'))

app.get("/", (req, res) => {
    res.send("API Working")
  });

app.listen(port, () => console.log(`Server started on http://localhost:${port}`))

// mongodb+srv://VelvetBug:1L0veBiriy*ni@cluster0.jerusrx.mongodb.net/?