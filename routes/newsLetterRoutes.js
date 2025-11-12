import { Router } from "express";
import { sendClientInfo } from "../controllers/newsLetterController.js";


const router=Router();

router.post('/',sendClientInfo);

export default router;