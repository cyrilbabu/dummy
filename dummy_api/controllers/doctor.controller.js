import Doctor from "../models/doctor.model.js";

// Add a new doctor
export const addDoctor = async (req, res) => {
  try {
    const {
      name,
      image,
      specialty,
      experience,
      contactNo,
      email,
      gender,
      location,
      qualifications,
      workingHours,
      fees,
    } = req.body;
    const newDoctor = new Doctor({
      name,
      image,
      specialty,
      experience,
      contactNo,
      email,
      gender,
      location,
      qualifications,
      workingHours,
      fees,
    });
    await newDoctor.save();
    res
      .status(201)
      .json({ message: "Doctor added successfully", doctor: newDoctor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a doctor
export const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    await Doctor.findByIdAndDelete(id);
    res.status(200).json({ message: "Doctor deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Show all doctors
export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Show one doctor
export const getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findById(id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Edit doctor details
export const editDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDoctor = await Doctor.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedDoctor)
      return res.status(404).json({ message: "Doctor not found" });
    res
      .status(200)
      .json({ message: "Doctor updated successfully", doctor: updatedDoctor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUniqueSpecialties = async (req, res) => {
  try {
    const specialties = await Doctor.distinct("specialty");
    res.status(200).json({ specialties });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
