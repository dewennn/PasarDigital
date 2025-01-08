import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"

// initialize env
dotenv.config()
const PORT = process.env.PORT || 5000

// setup express
const app = express()
app.use(express.json())

// routes for product
app.use("/api/products", productRoutes)

// start listening at PORT
app.listen(PORT, () => {
  connectDB()
  console.log("Server started at http://localhost:" + PORT)
})