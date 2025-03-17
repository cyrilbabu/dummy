import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./db/db.js";

import userRoutes from "./routes/user.routes.js";
import doctorRoutes from "./routes/doctor.routes.js";
import appointmentRoutes from "./routes/appointment.routes.js";

dotenv.config();
const app = express();
app.use(cors());

// ✅ Add body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/users", userRoutes);
app.use("/doctors", doctorRoutes);
app.use("/appointments", appointmentRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
  connectDB();
});
