import express, { urlencoded } from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan  from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js";
import cors from 'cors'

//configure env
dotenv.config();

//database config
connectDB();

const app = express()

//rest object
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));
// app.use(express.urlencoded({ extended: true })); // parses form submissions

//routes
app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/category",categoryRoutes)
app.use("/api/v1/product", productRoutes);


//rest api
app.get('/',(req,res)=>{
    res.send("<h1>welcome to eccomerce ap</h1>")
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server Running On ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white)
})


