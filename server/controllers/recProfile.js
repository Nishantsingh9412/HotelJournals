import mongoose from 'mongoose'
import RecruiterProfile from '../models/profiles/recruiter.js'

export const setRecruiterProfile = async (req, res) => {
    const { companyName,
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
            if(newRecruiterProfile){
                res.status(201).json({ success: true, message: "Recruiter Profile Created Successfully", result: newRecruiterProfile })
            }else{
                res.status(400).json({ success: false, message: "Failed to create Recruiter Profile" })
            }
        }
    } catch (error) {
        console.log("Error From Recruiter Profile Controller", error.message);
        res.status(500).json({ success: false, message: `Something went wrong from server ${error.message}` })
    }
}

export const getRecruiterProfile = async (req, res) => {
    return res.status(200).json({ message: "Recruiter Profile GET" })
}

export const updateRecruiterProfile = async (req, res) => {
    return res.status(200).json({ message: "Recruiter Profile UPDATE" })
}

export const deleteRecruiterProfile = async (req, res) => {
    return res.status(200).json({ message: "Recruiter Profile DELETED"})
}