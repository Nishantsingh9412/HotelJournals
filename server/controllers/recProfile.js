import mongoose from 'mongoose'
import RecruiterProfile from '../models/profiles/recruiter.js'

export const setRecruiterProfile = async (req, res) => {
    const {
        companyName,
        Designation,
        numberOfEmployees,
        HeadQuarters,
        industryType,
        companyType,
        companyWebsite,
        CompanyDescription,
        CompanysTagline,
        twitter,
        linkedIn,
        company_logo,
        created_by
    } = req.body

    try {
        if (!companyName ||
            !Designation ||
            !HeadQuarters ||
            !industryType ||
            !companyType ||
            !CompanyDescription
        ) {
            return res.status(400).json({ status: true, message: "Please Fill Mandatory Fields" })
        } else {
            const newRecruiterProfile = await RecruiterProfile.create({
                companyName,
                Designation,
                numberOfEmployees,
                HeadQuarters,
                industryType,
                companyType,
                companyWebsite,
                CompanyDescription,
                CompanysTagline,
                twitter,
                linkedIn,
                company_logo,
                created_by
            });
            if (newRecruiterProfile) {
                res.status(201).json({ success: true, message: "Recruiter Profile Created Successfully", result: newRecruiterProfile })
            } else {
                res.status(400).json({ success: false, message: "Failed to create Recruiter Profile" })
            }
        }
    } catch (error) {
        console.log("Error From Recruiter Profile Controller", error.message);
        res.status(500).json({ success: false, message: `Something went wrong from server ${error.message}` })
    }
    return res.status(200).json({ message: "Recruiter Profile SET" })
}

export const getRecruiterProfile = async (req, res) => {
    const { id: _id } = req.params
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({success:false,message:'Not a Valid Id'})
    }
    try {
        const singleRecProfile = await RecruiterProfile.find({"created_by":_id});
        res.status(200).json({ success: true, message: "Recruiter Profile Fetched Successfully", result: singleRecProfile })
    } catch (error) {
        console.log("Error From Recruiter Profile Controller", error.message);
        res.status(500).json({ success: false, message: `Something went wrong from server ${error.message}` })
    }

}

export const updateRecruiterProfile = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).json({ success: false, message: "Not a Valid Id" })
    }
    const {
        companyName,
        Designation,
        numberOfEmployees,
        HeadQuarters,
        industryType,
        companyType,
        companyWebsite,
        CompanyDescription,
        CompanysTagline,
        twitter,
        linkedIn,
        company_logo,
    } = req.body

    if (!companyName ||
        !Designation ||
        !HeadQuarters ||
        !industryType ||
        !companyType ||
        !CompanyDescription
    ) {
        return res.status(400).json({ status: true, message: "Please Fill Mandatory Fields" })
    }

    try {
        const RecruiterProfileupdated = await RecruiterProfile.findOneAndUpdate
        ({"created_by":_id},{
            $set: {
                'companyName': companyName,
                'Designation': Designation,
                'numberOfEmployees': numberOfEmployees,
                'HeadQuarters': HeadQuarters,
                'industryType': industryType,
                'companyType': companyType,
                'companyWebsite': companyWebsite,
                'CompanyDescription': CompanyDescription,
                'CompanysTagline': CompanysTagline,
                'twitter': twitter,
                'linkedIn': linkedIn,
                'company_logo': company_logo
            }
        }, { new: true })
        if (RecruiterProfileupdated) {
            res.status(200).json({
                success: true,
                message: "Recruiter Profile Updated Successfully",
                result: RecruiterProfileupdated
            })
        }
        else {
            res.status(400).json({
                success: false,
                message: "Failed to Update Recruiter Profile"
            })
        }
    } catch (error) {
        console.log("Error From Recruiter Profile Controller", error.message);
        res.status(500).json({ success: false, message: `Something went wrong from server ${error.message}` })
    }
}

export const deleteRecruiterProfile = async (req, res) => {
    const {id : _id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(400).json({success:false,message:'Not a Valid Id'})
    }
    try{
        const recruiterDeleted = await RecruiterProfile.findOneAndDelete({"created_by":_id});
        if(!recruiterDeleted){
            return res.status(400).json({success:false,message:'Failed to delete Recruiter Profile'})
        }else{
            res.status(200).json({success:true,message:'Recruiter Profile DELETED'})
        }
    }catch(error){
        console.log("Error From Recruiter Profile Controller", error.message);
        res.status(500).json({ success: false, message: `Something went wrong from server ${error.message}` })
    }

}