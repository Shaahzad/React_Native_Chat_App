import express from "express"
import http from "http"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import authRoutes from "./routes/auth.routes.js"
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use("/auth", authRoutes)
app.get("/", (req, res) => {
    res.send("Server Is Running")
})


const PORT = process.env.PORT || 3000


const server = http.createServer(app)


connectDB().then(() => {
    console.log('DB Connected')
    server.listen(PORT, () => {
        console.log('Server Is Running', PORT)
    })
}).catch((error) => {
    console.log('Failed to start server due to database connection error', error)
})