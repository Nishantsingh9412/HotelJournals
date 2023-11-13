import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

import users from '../models/auth.js'

export const signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const existingUser = await users.findOne({ email });
        console.log(existingUser);

        if (existingUser) {
            return res.status(404).json({ success:false, message: 'user Already Exists . ' })
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await users.create({ fname: firstName, lname: lastName, email, password: hashedPassword });
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, 'india');
        res.status(200).json({ success:true, result: newUser, token })
    } catch (err) {
        res.status(500).json({ success:false, message: `Something went wrong from server: ${err.message}` });
    }
}