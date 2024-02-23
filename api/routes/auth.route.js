import  express  from "express";
import { SignIn, SignOut, SignUp, google } from "../controllers/auth.controller.js";

const router =express.Router();

router.post("/SignUp", SignUp);
router.post("/SignIn", SignIn);
router.post('/google', google);
router.get('/Signout', SignOut);

export default router;
