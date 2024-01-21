const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const paymentRoutes = require("./routes/donation");

// initialize app
const app = express();

//env variables
dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/donation/", paymentRoutes);

//app listening
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening to port ${port}...`));
