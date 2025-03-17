import express from "express";
import {
  addAppointment,
  deleteAppointment,
  editAppointment,
  getAllAppointments,
  getAppointmentsByDoctor,
  getAppointmentsByUser,
  getAppointmentById,
} from "../controllers/appointment.controller.js";

const router = express.Router();

router.post("/add", addAppointment);
router.delete("/delete/:id", deleteAppointment);
router.put("/edit/:id", editAppointment);
router.get("/all", getAllAppointments);
router.get("/doctor/:doctorId", getAppointmentsByDoctor);
router.get("/user/:userId", getAppointmentsByUser);
router.get("/:id", getAppointmentById);

export default router;
