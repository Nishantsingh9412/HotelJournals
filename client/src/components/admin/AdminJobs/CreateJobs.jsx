import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
// import cities from 'cities.json';
import Select from 'react-select'
import JoditEditor from 'jodit-react';
import DOMPurify from 'dompurify';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import languages from '../AdminCourses/languages.js'
import { CreateJob } from '../../../redux/actions/jobsAdmin.js';

const CreateJobs = () => {
  let localUser;
  const dispatch = useDispatch();
  const predefinedJd = `
  <h1>Job Description</h1>  
  <p>Job Description should be atleast 50 characters long</p>
  <br>
  <b>Role : </b> [Role]
  <b>Industry Type: </b> [industry type]
  <b> Department : </b> [Department]
  <b> Employment Type :</b> [Employment Type]
  <b>Role Category:</b> [Role Category]
  <br/> 
  <b> Education </b>
  <b> UG : </b> [Any Graduate]
  <b> PG : </b> [Any Postgraduate]
  `
  const [jobDecription, setJobDescription] = useState('');

  const [showJobLink, setShowJobLink] = useState(false);
  const [disableJoiningDate, setDisableJoiningDate] = useState(false);

  const [jobTitle, setJobTitle] = useState('');
  const [jobCategory, setJobCategory] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobLocation, setJobLocation] = useState([]);
  const [mandatorySkills, setMandatorySkills] = useState([]);
  const [optionalSkills, setOptionalSkills] = useState([]);
  const [joiningDate, setJoiningDate] = useState('');
  const [isImmediate, setIsImmediate] = useState(false);
  const [minWorkExp, setMinWorkExp] = useState(0);
  const [maxWorkExp, setMaxWorkExp] = useState(0);
  const [minSalary, setMinSalary] = useState(0);
  const [salaryCurrency, setSalaryCurrency] = useState('');
  const [maxSalary, setMaxSalary] = useState(0);
  const [noOfOpenings, setNoOfOpenings] = useState(0);
  const [extraBenifitsVal, setExtraBenifitsVal] = useState([]);
  const [isExternalLink, setIsExternalLink] = useState(false);
  const [jobLink, setJobLink] = useState('');


  const isValidUrl = (url) => {
    try {
      new URL(url)
      return true;
    } catch (error) {
      return false;
    }
  }


  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],        // toggled buttons
      [{ 'list': 'ordered' }, { 'list': 'bullet' }] // dropdown with defaults from theme
    ]
  };

  const cities = [
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Kanpur', label: 'Kanpur' },
    { value: 'Gurugram', label: 'Gurugram' },
    { value: 'Noida', label: 'Noida' },
  ]

  const skills = [
    { value: 'Javascript', label: 'JavaScript' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
    { value: 'C++', label: 'C++' },
  ]

  const extraBenifits = [
    { value: 'Health Insurance', label: 'Health Insurance' },
    { value: 'Life Insurance', label: 'Life Insurance' },
    { value: 'Paid Leave', label: 'Paid Leave' },
    { value: 'Work From Home', label: 'Work From Home' },
    { value: 'Flexible Hours', label: 'Flexible Hours' },
    { value: 'Free Food', label: 'Free Food' },
    { value: 'Free Coffee', label: 'Free Coffee' },
    { value: 'Free Snacks', label: 'Free Snacks' },
  ]

  const storedProfile = JSON.parse(localStorage.getItem('Profile'));
  localUser = storedProfile?.result?._id;
  console.log(localUser);

  useEffect(() => {
    if (isImmediate) {
      const today = new Date().toISOString().split('T')[0];
      setJoiningDate(today);
    }
  }, [isImmediate]);

  useEffect(() => {
    setJobDescription(predefinedJd);
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !jobTitle ||
        !jobCategory ||
        !jobType ||
        jobLocation.length === 0 ||
        mandatorySkills.length === 0 ||
        (isImmediate === false && !joiningDate) ||
        !minWorkExp ||
        !maxWorkExp ||
        !minSalary ||
        !maxSalary ||
        !salaryCurrency ||
        !noOfOpenings ||
        !jobDecription
      ) {
        return toast.error('Please fill all the required fields');
      }
      if (jobTitle.length < 5) {
        return toast.error('Job Title should be atleast 5 characters long');
      }
      if (minWorkExp > 20 || minWorkExp < 0) {
        return toast.error('Minimum Work Experience should be less than 20 and greater than 0');
      } if (maxWorkExp > 20 || maxWorkExp < 0) {
        return toast.error('Maximum Work Experience should be less than 20 and greater than 0');
      }
      if (minWorkExp > maxWorkExp) {
        return toast.error('Minimum Work Experience should be less than Maximum Work Experience');
      } if (minSalary < 0 || maxSalary < 0) {
        return toast.error('Salary should be greater than 0');
      }
      if (minSalary > maxSalary) {
        return toast.error('Minimum Salary should be less than Maximum Salaryyyyyyy');
      } if (noOfOpenings < 0) {
        return toast.error('No of Openings should be greater than 0');
      } if (noOfOpenings > 1000) {
        return toast.error('No of Openings should be less than 1000');
      } if (!joiningDate && !isImmediate) {
        return toast.error('Please select Joining Date');
      } if (jobDecription.length < 50) {
        return toast.error('Job Description should be atleast 50 characters long');
      } if (!isValidUrl(jobLink) && isExternalLink) {
        return toast.error('Please enter valid URL');
      }
      if (!joiningDate) {
        return toast.error('Please select Joining Date');
      }
      const sanitizedJobDescription = DOMPurify.sanitize(jobDecription);
      
      const jobsData = {
        job_title: jobTitle,
        job_category: jobCategory,
        job_type: jobType,
        job_location: jobLocation,
        mandatory_skills: mandatorySkills,
        optional_skills: optionalSkills,
        joining_date: joiningDate,
        is_immediate: isImmediate,
        work_experience_min: minWorkExp,
        work_experience_max: maxWorkExp,
        salary_specification: salaryCurrency,
        salary_start: minSalary,
        salary_end: maxSalary,
        no_of_openings: noOfOpenings,
        extra_benifits: extraBenifitsVal,
        job_description: sanitizedJobDescription,
        isExternal: isExternalLink,
        job_link: jobLink,
        created_by: localUser
      }

      console.log(jobsData)
      if (jobsData) {
        const response = await dispatch(CreateJob(jobsData));
        if (response.success) {
          toast.success('Job Posted Successfully');
        } else {
          console.log(response)
          toast.error(response.message); // err.response.data.message
        }
      }
    } catch (error) {
      console.log(`this is from console.log ${error}`);
      // toast.error(`Job Posting Failed: ${error}`)
    }
  }



  return (
    <div className='mt-2 p-5'>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className='form-row '>

          <div className='col-md-4'>
            <label htmlFor="job_title"> Job Title  <small className='text-danger'> * </small> </label>
            <input type='text' className='form-control' placeholder='Job Title' onChange={(e) => setJobTitle(e.target.value)} />
          </div>

          <div className='col-md-4'>
            <label htmlFor="company_name"> Job Category <small className='text-danger'> * </small> </label>
            <select className='form-control' onChange={(e) => setJobCategory(e.target.value)}>
              <option value="">Select</option>
              <option value="Intern">Intern</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>

          <div className='col-md-2'>
            <label htmlFor="jobType"> Job Type  <small className='text-danger'> * </small> </label>
            <select className='form-control' onChange={(e) => setJobType(e.target.value)}>
              <option value="">Select</option>
              <option value="Remote"> Remote </option>
              <option value="InOffice"> InOffice </option>
              <option value="Hybrid"> Hybrid </option>
            </select>
          </div>
        </div>
        <div className='form-row mt-4' >
          <div className="col-md-4">
            <label htmlFor="jobLocation"> Job Location  <small className='text-danger'> * </small> </label>
            {/* Multiselect */}
            {/* <Select options={languages} isMulti onChange={(selectedOptions) => setCourseLanguage(selectedOptions.map(option => option.value))} /> */}
            <Select
              options={cities}
              isMulti
              onChange={(selectedOps) => setJobLocation(selectedOps.map(options => options.value))}
            />
          </div>
          {/* <Select options={} isMulti  /> */}
          {/* onChange={(selectedOptions) => setCourseLanguage(selectedOptions.map(option => option.value))} */}
          <div className='col-md-4'>
            <label htmlFor="mandatory_skills"> Mandatory Skills <small className='text-danger'> * </small> </label>
            {/* Multiselect */}
            <Select
              options={skills}
              isMulti
              onChange={(selectedOps) => setMandatorySkills(selectedOps.map(options => options.value))}
            />
          </div>


          <div className='col-md-2'>
            {/* Multiselect */}

            <label htmlFor="optional_skills"> Optional Skills </label>
            <Select options={skills} isMulti onChange={(selectedOps) => setOptionalSkills(selectedOps.map(options => options.value))} />
          </div>
        </div>

        <div className="form-row mt-4">
          <div className='col-md-4'>
            {/* lets add date and time picker here */}
            <label htmlFor="jobPostedDate"  > Joining Date  <small className='text-danger'> * </small> </label>
            <input
              type='date'
              disabled={disableJoiningDate}
              className='form-control'
              min={new Date().toISOString().split('T')[0]}
              // "YYYY-MM-DDTHH:mm:ss.sssZ". For example, "2022-03-15 T 13:56:59.120Z".
              onChange={(e) => setJoiningDate(e.target.value)}

            />

            <div className='mt-3'>
              <input type='checkbox' id='isImmediate' className='pt-2' onClick={() => setDisableJoiningDate(prevState => !prevState)} onChange={() => setIsImmediate(true)} style={{ transform: 'scale(1.6)' }} />
              <label htmlFor='isImmediate' className='ml-1 ' > Immediate Joining (Onboard within 30 days) </label>
            </div>
          </div>
        </div>


        <div className='row'>
          <div className="col-md-6 mt-4 pl-0">
            <label htmlFor="work_exp">Work Experience (Years) <small className='text-danger'>*</small></label>
            <div className='row'>
              <div className='col-md-4'>
                <label htmlFor="minExperience">Minimum </label>
                <input type='number' className='form-control' placeholder='0' min='0' max='20' onChange={(e) => setMinWorkExp(parseInt(e.target.value))} />
              </div>

              <div className='col-md-4'>
                <label htmlFor="maxExperience">Maximum </label>
                <input type='number' className='form-control' placeholder='20' min='0' max='20' onChange={(e) => setMaxWorkExp(parseInt(e.target.value))} />
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4 pl-0">
            <label htmlFor="salary">Salary Range (Annual) <small className='text-danger'>*</small></label>
            <div className='row'>
              <div className='col-md-4'>
                <label htmlFor="minSalary">Minimum </label>
                <input type='number' className='form-control' placeholder='0' min='0' onChange={(e) => setMinSalary(parseInt(e.target.value))} />
              </div>

              <div className='col-md-4'>
                <label htmlFor="maxSalary">Maximum </label>
                <input type='number' className='form-control' placeholder='100' min='0' onChange={(e) => setMaxSalary(parseInt(e.target.value))} />
              </div>

              <div className='col-md-2'>
                <label htmlFor="currency">Currency</label>
                <select className='form-control mt-2' onChange={(e) => setSalaryCurrency(e.target.value)}>
                  <option value=""> Select </option>
                  {/* Countriy wise values  */}
                  <option value="LPA"> LPA </option>
                  <option value="AUD"> AUD </option>
                  <option value="USD"> USD </option>
                  <option value="EUR"> EUR </option>
                  <option value="GBP"> GBP </option>
                  <option value="CAD"> CAD </option>
                  <option value="SGD"> SGD </option>
                  <option value="AED"> AED </option>
                  <option value="JPY"> JPY </option>
                  <option value="CNY"> CNY </option>
                  <option value="INR"> INR </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className='form-row'>
          <div className='col-md-4'>
            <label htmlFor="no_of_ops"> No of Openings <small className='text-danger'> * </small></label>
            <input type='number' className='form-control' placeholder='5' min='0' max='500' onChange={(e) => setNoOfOpenings(parseInt(e.target.value))} />
          </div>
          <div className='col-md-4'>
            <label htmlFor="extra_benifits"> Extra Benifits </label>
            {/* Multiselect */}
            <Select options={extraBenifits} isMulti onChange={(selectedOps) => setExtraBenifitsVal(selectedOps.map(option => option.value))} />
          </div>
          <div className='col-md-6'>
            {/* Left Jodit Editor  */}
            <label htmlFor="jobDesc"> Job Decription <small className='text-danger'> * </small> </label>
            <ReactQuill
              theme="snow"
              modules={modules}
              value={jobDecription}
              onChange={setJobDescription}
            />
          </div>
        </div>

        <div className='form-row mt-4'>
          {/* IsExternalLink  */}
          <div className='col-md-4'>
            <label htmlFor="isExternalLink"> Is External Link </label>
            <input
              type='checkbox'
              id='isExternalLink'
              onClick={() => setShowJobLink(prevState => !prevState)}
              onChange={() => setIsExternalLink(true)}
              className='pt-2 ml-3'
              style={{ transform: 'scale(1.6)' }}
            />
            <div>
              {
                showJobLink ?
                  (<>
                    <div>
                      <label htmlFor="jobLink" className='mt-2' > Job Link </label>
                      <input
                        type='text'
                        className='form-control'
                        onChange={(e) => setJobLink(e.target.value)}
                        placeholder='https://job-link/'

                      />
                    </div>

                  </>) : <></>
              }
            </div>
          </div>
        </div>

        <button type='submit' className='btn btn-success w-100 mt-3 mb-2'>  Post Job </button>

      </form >
    </div >
  )
}

export default CreateJobs
