import express from 'express';

import auth from "../middleware/auth.js";
import { loginSuperAdmin } from "../controllers/authSA.js";


const router = express.Router();

router.post('/login',loginSuperAdmin)


export default router
