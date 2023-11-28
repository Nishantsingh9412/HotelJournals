import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

import users from '../models/auth.js'

export const signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const existingUser = await users.findOne({ email });
        console.log(existingUser);

        if (existingUser) {
            console.log("user Already Exists");
            return res.status(401).json({ success:false, message: 'This email is alredy Registered' })
        }

        if(!firstName || !lastName || !email || !password){
            console.log("Please fill all the fields . ");
            return res.status(401).json({success:false, message: 'Please fill all the fields ' })
        }


        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await users.create({ fname: firstName, lname: lastName, email, password: hashedPassword });
        const token = jwt.sign({ email: newUser.email, id: newUser._id },process.env.JWT_SECRET,{expiresIn:'1h'}); 
        res.status(201).json({ success:true, result: newUser, token })
    } catch (err) {
        res.status(500).json({ success:false, message: `Something went wrong from server: ${err.message}` });
    }
}

export const login = async(req,res) => {
    const {email,password} = req.body;
    try{
        const existingUser = await users.findOne({email});
        console.log(existingUser);
        if(!email || !password){
            console.log("Please fill all the fields . ");
            return res.status(401).json({success:false, message: 'Please fill all the fields ' })
        }
        
        if(!existingUser){
            return res.status(404).json({success:false,message:'Please Create Account'});
        }
       

        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);
        if(!isPasswordCorrect){
            return res.status(401).json({success:false,message:'Invalid Credentials'});
        }

        const token =jwt.sign({email:existingUser.email,id:existingUser._id},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.status(200).json({ success:true , message:' Login Successfull ',result:existingUser,token})
    }catch(err){
        res.status(500).json({success:false,message:`Something went wrong from server ${err.message}`});

    }
}

