import Appointment from "../models/appointment.model.js";
import Doctor from "../models/doctor.model.js";
import User from "../models/user.model.js";

// Add a new appointment
export const addAppointment = async (req, res) => {
  try {
    const { doctorId, userId, date, time } = req.body;
    console.log("Doctor ID:", doctorId);
    console.log("User ID:", userId);

    // const doctorExists = await Doctor.findById(doctorId);
    // const userExists = await User.findById(userId);
    // if (!doctorExists || !userExists)
    //   return res.status(404).json({ message: "Doctor or User not found" });

    const newAppointment = new Appointment({ doctorId, userId, date, time });
    await newAppointment.save();

    res.status(201).json({
      message: "Appointment scheduled successfully",
      appointment: newAppointment,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an appointment
export const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    await Appointment.findByIdAndDelete(id);
    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Edit an appointment
export const editAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedAppointment)
      return res.status(404).json({ message: "Appointment not found" });
    res.status(200).json({
      message: "Appointment updated successfully",
      appointment: updatedAppointment,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Show all appointments
export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate(
      "doctorId userId",
      "name contactNo"
    );
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Show all appointments for a doctor
export const getAppointmentsByDoctor = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const appointments = await Appointment.find({ doctorId }).populate(
      "userId",
      "name contactNo"
    );
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Show all appointments for a user
export const getAppointmentsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const appointments = await Appointment.find({ userId }).populate(
      "doctorId",
      "name specialty image"
    );
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Show one appointment
export const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findById(id).populate(
      "doctorId userId",
      "name contactNo specialty"
    );
    if (!appointment)
      return res.status(404).json({ message: "Appointment not found" });
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
