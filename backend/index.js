import express from "express";
import userRoutes from "./routes/users.js";
import authRouter from "./routes/auth.js";
import log from "./middlewares/logger.js";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 4000;


// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);

    console.log("Connected to database");
    console.log("Database name:", mongoose.connection.name);

  } catch (err) {
    console.log(`Error connecting to database: ${err}`);
    process.exit(1);
  }
};


connectDB();


app.use(express.json());

app.use(cookieParser());


// CORS
app.use(
  cors({
    credentials: true,
    origin: process.env.ALLOWED_ORIGIN || "http://localhost:5173",
  })
);


app.use(log);


// Test API
app.get("/api", (req, res) => {
  res.json({
    message: "API is working"
  });
});


// Routes
app.use("/api/users", userRoutes);

app.use("/api/auth", authRouter);


// Server Start
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});


export default app;