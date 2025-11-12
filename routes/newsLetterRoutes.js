import { Router } from "express";
import { sendClientInfo } from "../controllers/newsletterController.js";


const router=Router();

router.post('/',sendClientInfo);

export default router;