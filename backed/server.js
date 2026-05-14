const express = require("express");
const app = express();
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");


dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running...");
});

app.use("/api/posts",require("./routes/postRoutes"));



const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server running on port http://localhost:${PORT}`));
