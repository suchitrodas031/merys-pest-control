require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// app.use(cors({
//     origin: [
//     "http://localhost:5173",
//     "https://merys-pest-control.vercel.app"
// ],
//     credentials: true
// }));

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://merys-pest-control.vercel.app",
      "https://www.merryspestcontrol.in",
      "https://merryspestcontrol.in"
    ],
    credentials: true,
  })
);
app.use(express.json());

const contactRoutes = require("./routes/contactRoutes");

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});