const express = require("express");
const authRouter = require("./routes/auth.routes");
const connectDB = require("./db/connect");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth",authRouter)

app.listen(PORT, () => {
  connectDB()
	console.log(`Server is running on port: ${PORT}`);
});
