import express from "express";
import {
  addUser,
  deleteUser,
  getAllUsers,
  getUserById,
  editUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/add", addUser);
router.delete("/delete/:id", deleteUser);
router.get("/all", getAllUsers);
router.get("/:id", getUserById);
router.put("/edit/:id", editUser);

export default router;
