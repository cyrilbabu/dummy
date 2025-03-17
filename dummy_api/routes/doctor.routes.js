import express from "express";
import {
  addDoctor,
  deleteDoctor,
  getAllDoctors,
  getDoctorById,
  editDoctor,
  getUniqueSpecialties,
} from "../controllers/doctor.controller.js";

const router = express.Router();

router.post("/add", addDoctor);
router.delete("/delete/:id", deleteDoctor);
router.get("/all", getAllDoctors);
router.get("/:id", getDoctorById);
router.put("/edit/:id", editDoctor);
router.get("/uniqueSpecialties/get", getUniqueSpecialties);

export default router;
