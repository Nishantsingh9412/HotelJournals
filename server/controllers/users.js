import mongoose from 'mongoose';
import users from '../models/auth.js'


export const getProfile = async(req,res) => {
    try {
        const allUsers = await users.find();
        const allUserDetails = [];
        allUsers.forEach(singleUser => {
            allUserDetails.push({_id:singleUser._id,fname:singleUser.fname,
                lname:singleUser.lname,email:singleUser.email,userType:singleUser.userType,
                phone:singleUser.phone,country_code:singleUser.country_code,
                joinedOn:singleUser.joinedOn});
        });
        res.status(200).json({success:true,allUserDetails});
    } catch (error) {
        res.status(401).json({success:false,message:`Something went wrong from getProfile controller ${error.message}`});
    }
}