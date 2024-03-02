
import mongoose from "mongoose";
import RecruiterProfile from "../models/profiles/recruiter.js";
import Jobs from '../models/jobs.js'
import User from "../models/auth.js";

export const updateCandidateStatus = async (req, res) => {
        const { jobId, userId, status } = req.body;
        if (!mongoose.Types.ObjectId.isValid(jobId) || !mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ success: false, message: 'Invalid ID' })
        }
        try {
            let applicantStatus = await Jobs.findOneAndUpdate(
                { _id: jobId, "applicants.user": userId },
                {
                    $set: {
                        "applicants.$.status": status
                    }
                },
                { new: true ,  runValidators: true }
            );
            if(!applicantStatus) {
                return res.status(404).json({ success: false, message: 'Job not found' });
            }
            applicantStatus = await Jobs.populate(applicantStatus, { path: 'applicants.user' });
            res.status(200).json({ success: true, message: 'Candidate status updated successfully', result: applicantStatus });
        } catch (error) {
            console.log("Error from updateCandidateStatus Controller ", error.message)
            res.status(500).json({ success: false, message: error.message });
        }
}

export const applyJob = async (req, res) => {
    const { jobId, userId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(jobId) || !mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ success: false, message: ' Invalid ID"s ' })
    }
    try {
        let jobApplicants = await Jobs.findOneAndUpdate(
            { _id: jobId },
            {
                $addToSet:
                    { applicants: { user: userId, status: 'Not_Offered' } }
            },
            { new: true }
        );

        if (!jobApplicants) {
            return res.status(404).json({ success: false, message: 'Job not found' });
        }

        // Manually populate the updated document
        jobApplicants = await Jobs.populate(jobApplicants, { path: 'applicants.user' });

        res.status(200).json({ success: true, message: 'Applied for Job Successfully', result: jobApplicants });
    } catch (error) {
        console.log("Error from applyJob Controller ", error.message)
        res.status(500).json({ success: false, message: error.message });
    }
}

export const postJobs = async (req, res) => {
    try {
        const {
            job_title, job_category, job_type,
            job_location, mandatory_skills, optional_skills,
            joining_date, is_immediate, work_experience_min,
            work_experience_max, salary_specification, salary_start,
            salary_end, no_of_openings, extra_benifits,
            job_description, isExternal, job_link, created_by
        } = req.body;

        if (
            !job_title ||
            !job_category ||
            !job_type ||
            job_location.length === 0 ||
            mandatory_skills.length === 0 ||
            (is_immediate === false && !joining_date) ||
            !work_experience_min ||
            !work_experience_max ||
            !salary_start ||
            !salary_end ||
            !salary_specification ||
            !no_of_openings ||
            !job_description
        ) {
            return res.status(400).json({ success: false, message: "Please Fill all the fieldsssss" });
        }
        else {
            const recruiterCompanyLogo = await RecruiterProfile.findOne({created_by:created_by}).select('company_logo');
            if(!recruiterCompanyLogo){
                console.log("No Company Logo Found")            
            }
            const newJob = await Jobs.create({
                jobTitle: job_title,
                jobCategory: job_category,
                jobType: job_type,
                jobLocation: job_location,
                mandatorySkills: mandatory_skills,
                optionalSkills: optional_skills,
                joiningDate: joining_date,
                isImmediate: is_immediate,
                workExperienceMin: work_experience_min,
                workExperienceMax: work_experience_max,
                salarySpecification: salary_specification,
                salaryStart: salary_start,
                salaryEnd: salary_end,
                no_of_openings,
                extraBenifits: extra_benifits,
                jobDescription: job_description,
                isExternal,
                jobLink: job_link,
                company_logo: recruiterCompanyLogo ? recruiterCompanyLogo.company_logo : undefined,
                created_by,
            });
            if (newJob) {
                res.status(201).json({ success: true, message: 'Job Added Successfully', result: newJob });
            } else {
                res.status(400).json({ success: false, message: 'failed to create user' })
            }
        }
    } catch (error) {
        console.log("Error from postJobs Controller ", error.message)
        res.status(500).json({ success: false, message: 'something went wrong' })
    }
}

export const getAllJobs = async (req, res) => {
    try {
        const AllJobs = await Jobs.find();
        const AllJobsArray = [];
        AllJobs.forEach(singleJob => {
            AllJobsArray.push({
                _id: singleJob._id,
                jobTitle: singleJob.jobTitle,
                jobCategory: singleJob.jobCategory,
                jobType: singleJob.jobType,
                jobApplicants: singleJob.applicants,
                jobLocation: singleJob.jobLocation,
                mandatorySkills: singleJob.mandatorySkills,
                optionalSkills: singleJob.optionalSkills,
                joiningDate: singleJob.joiningDate,
                isImmediate: singleJob.isImmediate,
                workExperienceMin: singleJob.workExperienceMin,
                workExperienceMax: singleJob.workExperienceMax,
                salarySpecification: singleJob.salarySpecification,
                salaryStart: singleJob.salaryStart,
                salaryEnd: singleJob.salaryEnd,
                no_of_openings: singleJob.no_of_openings,
                extraBenifits: singleJob.extraBenifits,
                jobDescription: singleJob.jobDescription,
                isExternal: singleJob.isExternal,
                jobLink: singleJob.jobLink,
                company_logo: singleJob.company_logo,
                created_by: singleJob.created_by
            })
        });
        res.status(200).json({ success: true, message: 'All jobs Data Fetched Successfully', result: AllJobsArray })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}   

export const getSingleJob = async (req, res) => {
    try {
        const { id } = req.params;
        const singleJob = await Jobs.findById(id).populate('applicants.user','-password -joinedOn')
        res.status(200).json({ success: true, message: 'Single Job Data', result: singleJob })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

export const DeleteJob = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).json({ success: false, message: 'no job exists' })
    }
    try {
        await Jobs.findByIdAndDelete(_id);
        res.status(200).json({ success: true, message: 'job deleted successfully' })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

export const editJob = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).send({ success: false, message: 'Invalid job ID' });
    }
    const {
        job_title, job_category, job_type,
        job_location, mandatory_skills, optional_skills,
        joining_date, is_immediate, work_experience_min,
        work_experience_max, salary_specification, salary_start,
        salary_end, no_of_openings, extra_benifits,
        job_description, isExternal, job_link
    } = req.body;

    console.log('after console log of req.body in editJob Controller');
    try {
        const updatedJob = await Jobs.findByIdAndUpdate(_id, {
            $set: {
                'jobTitle': job_title,
                'jobCategory': job_category,
                'jobType': job_type,
                'jobLocation': job_location,
                'mandatorySkills': mandatory_skills,
                'optionalSkills': optional_skills,
                'joiningDate': joining_date,
                'isImmediate': is_immediate,
                'workExperienceMin': work_experience_min,
                'workExperienceMax': work_experience_max,
                'salarySpecification': salary_specification,
                'salaryStart': salary_start,
                'salaryEnd': salary_end,
                'no_of_openings': no_of_openings,
                'extraBenifits': extra_benifits,
                'jobDescription': job_description,
                'isExternal': isExternal,
                'jobLink': job_link
            },
        }, { new: true })

        console.log(updatedJob);

        if (!updatedJob) {
            return res.status(400).json({ success: false, message: 'Failed to update job' })
        } else {
            res.status(200).json({ success: true, message: 'Job Updated Successfulllllllly', result: updatedJob })
        }
    } catch (error) {
        console.log("Error from editJob Controller ", error.message)
        res.status(500).json({ success: false, message: error.message })
    }
}