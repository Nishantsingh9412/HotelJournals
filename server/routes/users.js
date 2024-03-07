import express from "express";

import { signup, login } from "../controllers/auth.js";
import {
    getProfile,
    getProfileById,
    updateProfilePic,
    delteProfilePic
}
    from "../controllers/users.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)

router.get('/profile', getProfile)
router.get('/profile/:id', getProfileById)
router.patch('/profile/update/:id', updateProfilePic)
router.patch('/profile/delete/:id', delteProfilePic)

export default router