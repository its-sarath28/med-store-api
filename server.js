const express = require("express");

require("dotenv").config();
require("./config/dbConnect");

const globalErrorHandler = require("./middlewares/globalErrorHandler");

const userRouter = require("./routes/users/userRoute");
const medicineRouter = require("./routes/medicine/medicineRoute");

const app = express();

//middleware
app.use(express.json());

//Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/medicine", medicineRouter);

//global error handler
app.use(globalErrorHandler);

//404 Error
app.use("*", (req, res) => {
  res.status(404).json({
    message: `${req.originalUrl} - File not found`,
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});
