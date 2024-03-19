import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Select from 'react-select'
import { useDispatch } from 'react-redux';
// import cities from 'cities.json';
import DOMPurify from 'dompurify';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JoditEditor from 'jodit-react';

import languages from '../AdminCourses/languages.js'
import { CreateJob } from '../../../redux/actions/jobsAdmin.js';
import SideBar from '../RecruiterDashboard/Sidebar/SideBar.jsx';
import JobStyles from './CreateJob.module.css';

const CreateJobs = () => {
  let localUser;
  const dispatch = useDispatch();
  const predefinedJd = ``
  const [jobDecription, setJobDescription] = useState('');
  const [showJobLink, setShowJobLink] = useState(false);
  const [disableJoiningDate, setDisableJoiningDate] = useState(false);

  const [jobTitle, setJobTitle] = useState('');
  const [country, setCountry] = useState('');
  // const [citiesData, setCitiesData] = useState([]);
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

  // For countries states and cities 

  const [countriesAll, setCountriesAll] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  const [statesAll, setStatesAll] = useState([]);
  const [statesLoading, setStatesLoading] = useState(false);
  const [selectedState, setSelectedState] = useState('');

  const [citiesAll, setCitiesAll] = useState([]);
  const [citiesLoading, setCitiesLoading] = useState(false);

  const [selectedCity, setSelectedCity] = useState('');


  const isValidUrl = (url) => {
    try {
      new URL(url)
      return true;
    } catch (error) {
      return false;
    }
  }

  useEffect(() => {
    if (jobType === 'Remote') {
      setJobLocation('Remote');
    }
  }, [jobType])

  const loadCountries = async () => {

    const response = await axios.get('https://api.countrystatecity.in/v1/countries', {
      headers: {
        'X-CSCAPI-KEY': process.env.REACT_APP_CSC_API_KEY
      }
    });
    console.log('countres')
    console.log(response);
    const countriesData = response?.data?.map((country) =>
    ({
      value: country.name,
      label: country.name,
      iso2: country.iso2
    }));

    setCountriesAll(countriesData);
  }

  const loadStates = async () => {
    setStatesLoading(true);
    const response = await axios.get(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/states`, {
      headers: {
        'X-CSCAPI-KEY': process.env.REACT_APP_CSC_API_KEY
      }
    });
    if (response) {
      const statesData = response?.data?.map((state) =>
      ({
        value: state.name,
        label: state.name,
        iso2: state.iso2
      }));
      setStatesAll(statesData);
      setStatesLoading(false);
    }
  }

  const loadCities = async () => {
    setCitiesLoading(true);
    const response = await axios.get(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/states/${selectedState}/cities`, {
      headers: {
        'X-CSCAPI-KEY': process.env.REACT_APP_CSC_API_KEY
      }
    });

    if (response) {
      const citiesData = response.data.map((city) =>
      ({
        value: city.name,
        label: city.name
      }));

      setCitiesAll(citiesData);
      setCitiesLoading(false);
    }
  }


  useEffect(() => {
    if (selectedCountry) {
      loadStates();
    }
  }, [selectedCountry])

  useEffect(() => {
    if (selectedState) {
      loadCities();
    }
  }, [selectedState])

  useEffect(() => {
    loadCountries();
    // dispatch(GetJobs())
  }, [dispatch]);

  // const getCities = async () => {
  //   const response = await axios.get('https://countriesnow.space/api/v0.1/countries/cities/q?country=germany');
  //   setCitiesData(response?.data?.data);
  // };

  // useEffect(() => {
  //   getCities();
  // }, [])


  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],        // toggled buttons
      [{ 'list': 'ordered' }, { 'list': 'bullet' }] // dropdown with defaults from theme
    ]
  };

  // const cities = [
  //   { value: 'Delhi', label: 'Delhi' },
  //   { value: 'Kanpur', label: 'Kanpur' },
  //   { value: 'Gurugram', label: 'Gurugram' },
  //   { value: 'Noida', label: 'Noida' },
  // ]

  // const cities = citiesData.map(city => ({
  //   value: city, label: city
  // }));


  const skills = [
    { value: 'Administrative Skills', label: 'Administrative Skills' },
    { value: 'Attention to Detail', label: 'Attention to Detail' },
    { value: 'Bartending Skills', label: 'Bartending Skills' },
    { value: 'Budgeting', label: 'Budgeting' },
    { value: 'Cash Handling', label: 'Cash Handling' },
    { value: 'Cleaning Techniques', label: 'Cleaning Techniques' },
    { value: 'Client Relationship Management', label: 'Client Relationship Management' },
    { value: 'Communication Skills', label: 'Communication Skills' },
    { value: 'Contract Management', label: 'Contract Management' },
    { value: 'Culinary Skills', label: 'Culinary Skills' },
    { value: 'Customer Service', label: 'Customer Service' },
    { value: 'Data Analysis', label: 'Data Analysis' },
    { value: 'Decision-Making', label: 'Decision-Making' },
    { value: 'Destination Knowledge', label: 'Destination Knowledge' },
    { value: 'Employee Relations', label: 'Employee Relations' },
    { value: 'Event Planning', label: 'Event Planning' },
    { value: 'Financial Analysis', label: 'Financial Analysis' },
    { value: 'Financial Reporting', label: 'Financial Reporting' },
    { value: 'Front Office Operations', label: 'Front Office Operations' },
    { value: 'HR Policies and Procedures', label: 'HR Policies and Procedures' },
    { value: 'Housekeeping Management', label: 'Housekeeping Management' },
    { value: 'Inventory Management', label: 'Inventory Management' },
    { value: 'Leadership', label: 'Leadership' },
    { value: 'Market Research', label: 'Market Research' },
    { value: 'Marketing Strategy', label: 'Marketing Strategy' },
    { value: 'Menu Knowledge', label: 'Menu Knowledge' },
    { value: 'Menu Planning', label: 'Menu Planning' },
    { value: 'Negotiation Skills', label: 'Negotiation Skills' },
    { value: 'Order Taking', label: 'Order Taking' },
    { value: 'Organization', label: 'Organization' },
    { value: 'Performance Management', label: 'Performance Management' },
    { value: 'Problem-Solving Skills', label: 'Problem-Solving Skills' },
    { value: 'Recruitment', label: 'Recruitment' },
    { value: 'Reservations Management', label: 'Reservations Management' },
    { value: 'Restaurant Operations', label: 'Restaurant Operations' },
    { value: 'Sales Techniques', label: 'Sales Techniques' },
    { value: 'Strategic Planning', label: 'Strategic Planning' },
    { value: 'Supplier Management', label: 'Supplier Management' },
    { value: 'Technical Skills', label: 'Technical Skills' },
    { value: 'Time Management', label: 'Time Management' },
    { value: 'Tour Planning', label: 'Tour Planning' },
    { value: 'Training and Development', label: 'Training and Development' },
    { value: 'Upselling', label: 'Upselling' },
    { value: 'Writing Skills', label: 'Writing Skills' },
  ];


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
  }, [])

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
    <>
      <div className={JobStyles.containerJobs}>
        <div className={JobStyles.sidebar}>
          <SideBar />
        </div>
        <div className={JobStyles.content} >
          <div className='mt-2 p-5'>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
              <div className='form-row '>

                <div className='col-md-4'>
                  <label htmlFor="job_title"> Job Title  <small className='text-danger'> * </small> </label>
                  {/* <input type='text' className='form-control' placeholder='Job Title' onChange={(e) => setJobTitle(e.target.value)} /> */}
                  <select className='form-control' onChange={(e) => setJobTitle(e.target.value)} >
                    <option value="" > Select </option>
                    <option value="F & B Kitchen">F & B Kitchen</option>
                    <option value="F & B Services">F & B Services</option>
                    <option value="Finance & Marketing">Finance & Marketing</option>
                    <option value="Guest Relations">Guest Relations</option>
                    <option value="Host/Hostess">Host/Hostess</option>
                    <option value="Housekeeping">Housekeeping</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Maintenances">Maintenances</option>
                    <option value="Management">Management</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Other">Other</option>
                    <option value="Pastry">Pastry</option>
                    <option value="Porter">Porter</option>
                    <option value="Project Management">Project Management</option>
                    <option value="Public Relations">Public Relations</option>
                    <option value="Purchasing">Purchasing</option>
                    <option value="Reception">Reception</option>
                    <option value="Recreation & Leisure">Recreation & Leisure</option>
                    <option value="Reservations">Reservations</option>
                    <option value="Revenue Management">Revenue Management</option>
                    <option value="Room Division Management">Room Division Management</option>
                    <option value="Sales">Sales</option>
                    <option value="Secretary / Executive Assistant">Secretary / Executive Assistant</option>
                    <option value="Security">Security</option>
                    <option value="Sommelier">Sommelier</option>
                    <option value="Spa">Spa</option>
                    <option value="Sport and Fitness">Sport and Fitness</option>
                    <option value="Steward">Steward</option>
                    <option value="Travel Guide">Travel Guide</option>
                    <option value="Travel Tour Operator">Travel Tour Operator</option>
                    <option value="Account Management">Account Management</option>
                    <option value="Administration">Administration</option>
                    <option value="Bar">Bar</option>
                    <option value="Concierge">Concierge</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Content & Communication">Content & Communication</option>
                    <option value="Customer Services">Customer Services</option>
                    <option value="Data & Analytics">Data & Analytics</option>
                    <option value="Event">Event</option>
                    <option value="F & B Management">F & B Management</option>
                  </select>

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

              {/* 
              <div className='form-row mt-4'>
                <div className="col-md-4">
                  <label htmlFor="country"> Country  <small className='text-danger'> * </small> </label>
                  <input type='text' className='form-control' placeholder='India' onChange={(e) => setCountry(e.target.value)} />
                </div>
              </div> */}

              {/* Testing Starts */}
              {jobType === 'InOffice' || jobType === 'Hybrid' ?
                <>
                  <div className='form-row mt-3'>
                    <div className="col-md-4">
                      <label htmlFor="select countries">
                        Country
                      </label>
                      <Select
                        options={countriesAll?.map((country) => country)}
                        onChange={(e) => {
                          setSelectedCountry(e.iso2);
                          console.log('Selected Country : ', e.iso2);
                        }}
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="select state">
                        State
                      </label>
                      <Select
                        options={statesAll?.map((state) => state)}
                        isDisabled={statesLoading}
                        isLoading={statesLoading}
                        onChange={(e) => {
                          setSelectedState(e.iso2);
                          console.log('Selected Country : ', e.iso2);
                        }}
                      />
                    </div>
                    <div className='col-md-4'>
                      <label htmlFor="select cities">
                        Cities
                      </label>
                      <Select
                        options={citiesAll?.map((city) => city)}
                        isDisabled={citiesLoading}
                        isLoading={citiesLoading}
                        isMulti
                        onChange={(selectedOps) => {
                          setJobLocation(selectedOps.map((city) => city.value));
                        }}
                      />
                    </div>
                  </div>
                </> : null
              }
              {/* Testing End */}

              <div className='form-row mt-4' >

                {
                  /* <div className="col-md-4">
                    <label htmlFor="jobLocation"> Job Location  <small className='text-danger'> * </small> </label>
                    <Select
                      options={cities}
                      isMulti
                      isDisabled={country === '' ? true : false}
                      onChange={(selectedOps) => setJobLocation(selectedOps.map(options => options.value))}
                    />
                  </div> */
                }

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


                <div className='col-md-4'>
                  {/* Multiselect */}

                  <label htmlFor="optional_skills"> Optional Skills </label>
                  <Select
                    options={skills.filter((skill) => !mandatorySkills.includes(skill.value))}
                    isMulti
                    onChange={(selectedOps) => setOptionalSkills(selectedOps.map(options => options.value))}
                  />
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
        </div>
      </div>
    </>
  )
}

export default CreateJobs
