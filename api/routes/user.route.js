import express  from "express";
import { deleteUser, test, updateUser } from "../controllers/user.controller.js";
import { varifyToken } from "../utils/verifyUser.js";

const router = express.Router();
router.get('/test', test);
router.post('/update/:id', varifyToken, updateUser)
router.delete('/delete/:id', varifyToken, deleteUser)

export default router;