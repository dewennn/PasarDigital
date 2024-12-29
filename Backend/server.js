import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"

// INITIALIZE ENV
dotenv.config()
const PORT = process.env.PORT || 5000


// SETUP EXPRESS
const app = express()
app.use(express.json()) // Allow us to accept JSON data in the req.body


// CRUD ROUTES
app.use("/api/products", productRoutes)


// PAGES
app.listen(PORT, () => {
  connectDB()
  console.log("Server started at http://localhost:" + PORT)
})
