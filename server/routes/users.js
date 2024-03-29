import express from "express";

import { signup, login } from "../controllers/auth.js";
import {
    getProfile,
    getProfileById,
    updateProfilePic,
    delteProfilePic,
    getProfilePic
}
    from "../controllers/users.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)

router.get('/profile', getProfile)
router.get('/profile/:id', getProfileById)
router.get('/profile/pic/:id', getProfilePic)
router.patch('/profile/updatepic/:id', updateProfilePic)
router.patch('/profile/deletepic/:id', delteProfilePic)

export default router