// import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import {
    Button as ButtonChakra,
    Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react';
import { es } from 'date-fns/locale'
import PuffLoader from 'react-spinners/PuffLoader.js';
import { formatDistanceToNow } from 'date-fns';
// import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';
import { RxCross1 } from "react-icons/rx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card } from 'react-bootstrap';
// Icons 
import { FaLocationDot } from "react-icons/fa6";
import { TbBriefcase } from 'react-icons/tb';
import { FaWallet } from 'react-icons/fa';
import { BsBuildings } from 'react-icons/bs';
// import { IoMdTime } from "react-icons/io";
// import { FaArrowUpRightDots } from "react-icons/fa6";


// Modules 
// import { DeleteJobAction, GetJobs } from '../../../redux/actions/jobsAdmin.js';
// import JobsBgImg from '../../assets/img/brief2.png'
import { CiFilter } from 'react-icons/ci';
import TooltipParagraph from './TooltipParagraph';
import styles from './AllJobs.module.css';
import 'animate.css';

import newJobHeaderImg from '../../assets/img/job2_new.png'
import { GetJobsPaginatedAction } from '../../redux/actions/jobsAdmin.js';
import { checkAppliedByUserAllJobs } from '../../api/index.js';
// import { DeleteACourseAction } from '../../../redux/actions/courseAdmin.js';

const AllJobs = () => {
    const dispatch = useDispatch();
    // const [alljobsValue, setAllJobsValue] = useState(true);
    // const [applied, setApplied] = useState(false);
    const [lazyLoadingJobs, setLazyLoadingJobs] = useState(false);
    const [hasMorejobs, setHasMoreJobs] = useState(true);
    const [loadingApplied, setLoadingApplied] = useState(true);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [AppliedJobs, setAppliedJobs] = useState([]);
    // for Pagination
    const [items, setItems] = useState([]);
    const [index, setIndex] = useState(1);
    const [limit, setLimit] = useState(5);
    // end for pagination

    // for pagination of filtered jobs 
    // const [filteredIndex, setFilteredIndex] = useState(1);
    // const [filteredLimit, setFilteredLimit] = useState(5);
    // end for pagination of filtered jobs 
    const [IsFilteredCheck, setIsFilteredCheck] = useState(false);

    const serverURL = process.env.REACT_APP_SERVER_URL;

    const [AllFilters, setAllFilters] = useState({
        DatePosted: "",
        ContractTypes: [],
        JobType: []
    });


    const handleSelectedFilterChange = (filterName, e) => {
        setAllFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: e.target.checked ? [...prevFilters[filterName], e.target.value] : prevFilters[filterName].filter(option => option !== e.target.value)
        }));
    };



    const [showDropDown, setShowDropDown] = useState(false);
    const [jobId, setJobId] = useState('');
    const [loadingPage, setLoadingPage] = useState(true);

    const [countriesAll, setCountriesAll] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    const [statesAll, setStatesAll] = useState([]);
    const [statesLoading, setStatesLoading] = useState(false);
    const [selectedState, setSelectedState] = useState('');

    const [citiesAll, setCitiesAll] = useState([]);
    const [citiesLoading, setCitiesLoading] = useState(false);

    const [selectedCity, setSelectedCity] = useState('');

    const AllJobsData = useSelector((state) => state.AllJobsReducer)
    console.log(AllJobsData);

    const userProfile = JSON.parse(localStorage.getItem('Profile'));
    const user_id = userProfile?.result?._id;
    // const AppliedJobs = AllJobsData?.result?.filter((job) => job.jobApplicants.some((applicant) => applicant.user === user_id));
    // console.log("These are all applied Jobs \n : ");
    // console.log(AppliedJobs);

    const MyJobs = AllJobsData?.result;

    // Filtration of Jobs
    console.log(MyJobs);


    // const loadCountries = async () => {

    //     const response = await axios.get('https://api.countrystatecity.in/v1/countries', {
    //         headers: {
    //             'X-CSCAPI-KEY': process.env.REACT_APP_CSC_API_KEY
    //         }
    //     });
    //     console.log('countries')
    //     console.log(response);
    //     const countriesData = response?.data?.map((country) =>
    //     ({
    //         value: country.name,
    //         label: country.name,
    //         iso2: country.iso2
    //     }));

    //     setCountriesAll(countriesData);
    // }

    // const loadStates = async () => {
    //     setStatesLoading(true);
    //     const response = await axios.get(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/states`, {
    //         headers: {
    //             'X-CSCAPI-KEY': process.env.REACT_APP_CSC_API_KEY
    //         }
    //     });
    //     if (response) {
    //         const statesData = response?.data?.map((state) =>
    //         ({
    //             value: state.name,
    //             label: state.name,
    //             iso2: state.iso2
    //         }));
    //         setStatesAll(statesData);
    //         setStatesLoading(false);
    //     }
    // }

    // const loadCities = async () => {
    //     setCitiesLoading(true);
    //     const response = await axios.get(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/states/${selectedState}/cities`, {
    //         headers: {
    //             'X-CSCAPI-KEY': process.env.REACT_APP_CSC_API_KEY
    //         }
    //     });

    //     if (response) {
    //         const citiesData = response.data.map((city) =>
    //         ({
    //             value: city.name,
    //             label: city.name
    //         }));

    //         setCitiesAll(citiesData);
    //         setCitiesLoading(false);
    //     }
    // }

    console.log('All Filtered Jobs Data \n');
    console.log(filteredJobs);

    const fetchData = useCallback(async () => {
        if (loadingPage) return;
        if (hasMorejobs === false) return;

        setLazyLoadingJobs(true);
        // Increment the index state before fetching data
        setIndex((prevIndex) => prevIndex + 1);

        // Use the updated index state for fetching data
        dispatch(GetJobsPaginatedAction(index + 1, limit))
            .then((res) => {
                console.log(177);
                console.log(res)
                setItems((prevItems) => [...prevItems, ...res.data]);
                setLazyLoadingJobs(false);
                if (res.data.length === 0) {
                    setHasMoreJobs(false);
                }

            }).catch((err) => console.log(err));
    }, [index, loadingPage]);


    useEffect(() => {
        const getData = async () => {
            setLoadingPage(true);
            try {
                dispatch(GetJobsPaginatedAction(index, limit)).then((response) => {
                    setItems(response.data);
                })
            } catch (error) {
                console.log(error);
            }
            setLoadingPage(false);
        };

        getData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } =
                document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 20) {
                fetchData();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [fetchData]);

    // useEffect(() => {
    //     if (selectedCountry) {
    //         loadStates();
    //     }
    // }, [selectedCountry])

    // useEffect(() => {
    //     if (selectedState) {
    //         loadCities();
    //     }
    // }, [selectedState])

    // useEffect(() => {
    //     dispatch(GetJobs())
    // }, []);

    useEffect(() => {
        if (MyJobs) {
            setLoadingPage(false);
        }
    }, [MyJobs])

    // const options = [
    //     { value: 'Salary', label: 'Salary' },
    //     { value: 'Experience', label: 'Experience' },
    //     { value: 'Recent_Jobs', label: 'Recent Jobs' },
    //     { value: 'Apply_Before', label: 'Apply Before' }
    // ]

    const handleApplyFilter = async () => {
        console.log('All Filters')
        console.log(AllFilters);
        try {
            const params = new URLSearchParams();
            // console.log('Params : \n', params)
            for (let key in AllFilters) {
                // if (key !== 'DatePosted') {
                params.append(key, AllFilters[key]);
                // }
            }
            console.log('Params : \n', params.toString());
            const response = await
                fetch(`${serverURL}/jobs/filter?${params.toString()}`);
            // fetch(`${serverURL}/jobs/filter?${params.toString()}&citiesFilter=${AllFilters.citiesFilter}`);
            const data = await response.json();
            setFilteredJobs(data?.result?.paginatedData);
            console.log('Filtered Data \n');
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        handleApplyFilter();
    }, [AllFilters])

    const handleClearFilter = () => {
        setAllFilters({
            DatePosted: "",
            ContractTypes: [],
            JobType: []
        });
        setIsFilteredCheck(false);

    }

    const AppliedJobsByUser = () => {
        checkAppliedByUserAllJobs(user_id)
            .then((res) => {
                console.log(res?.data?.result);
                setAppliedJobs(res?.data?.result)
                setLoadingApplied(false);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    return (

        <>
            {/* Testing Starts */}
            {/* <div className='form-row mt-3'>
                <label htmlFor="select countries">
                    Select Countries
                </label>
                <Select
                    options={countriesAll?.map((country) => country)}
                    onChange={(e) => {
                        setSelectedCountry(e.iso2);
                        console.log('Selected Country : ', e.iso2);
                    }}
                />

                <label htmlFor="select state">
                    Select State
                </label>
                <Select
                    options={statesAll?.map((state) => state)}
                    // isDisabled={statesLoading}
                    isLoading={statesLoading}
                    onChange={(e) => {
                        setSelectedState(e.iso2);
                        console.log('Selected Country : ', e.iso2);
                    }}
                />

                <label htmlFor="select cities">
                    Select Cities
                </label>
                <Select
                    options={citiesAll?.map((city) => city)}
                    // isDisabled={citiesLoading}
                    isLoading={citiesLoading}
                    isMulti
                    onChange={(selectedOps) => {
                        setSelectedCity(selectedOps.map((city) => city.value));
                    }}
                />

            </div> */}
            {/* Testing End */}
            {loadingPage ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <PuffLoader
                        color="red"
                        size={70}
                    />
                </div>
            ) : (
                <div className='mb-5'>
                    <ToastContainer />
                    <div className='container-fluid d-flex '
                        style={{
                            backgroundImage: `url(${newJobHeaderImg})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            height: '70vh',
                        }}
                    >
                    </div>



                    {/* Filter Section  Button Start*/}
                    <div className='d-flex justify-content-end'>
                        <ButtonChakra
                            leftIcon={<CiFilter size={'25'} />}
                            bgColor={'#E4B49D'}
                            color={'white'}
                            borderRadius={'50px'}
                            width={'8rem'}
                            alignSelf={'flex-end'}
                            p={5}
                            m={5}
                            marginRight={'5vw'}
                            onClick={() => setIsFilteredCheck(!IsFilteredCheck)}
                        >
                            {/* Filter */}
                            Filtros
                        </ButtonChakra>
                    </div>

                    {/* Filter Section Button  End */}

                    {/* Filter Section Start */}

                    <div className='container' style={{ boxShadow: '10px 10px 10px #e4b49d' }} >
                        {
                            IsFilteredCheck &&
                            <div className='mt-2 pb-4'>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <h4>
                                            {/* Filter by */}
                                            Filtrar por
                                        </h4>
                                    </div>
                                    <div
                                        style={{ cursor: 'pointer', display: 'flex' }}
                                        onClick={() => handleClearFilter()}
                                    >
                                        <h6>
                                            {/* Clear All  */}
                                            Limpiar 
                                            &nbsp; 
                                            </h6>
                                        <RxCross1 />
                                    </div>
                                </div>
                                <div >
                                    <hr />
                                    {/* <h5> Contract Types </h5>
                                    <Select
                                        isMulti
                                        options={contractFilterOptions}
                                        onChange={(selectedOption) => console.log(selectedOption)}
                                    /> */}
                                </div>

                                <div className="form-row mt-2 p-2">
                                    <div
                                        className='col-md-2'
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '5px'
                                        }}
                                    >
                                        <label htmlFor='DatePosted'
                                            style={{ marginLeft: '-21px' }}
                                        >
                                            {/* Date Posted */}
                                            Fecha
                                        </label>
                                        <div>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                value="All"
                                                id="All"
                                                name='timeFilter'
                                                onChange={(e) => setAllFilters({ ...AllFilters, DatePosted: e.target.value })}
                                            />
                                            <label
                                                className="form-check-label"
                                                for="All"
                                            >
                                                All
                                            </label>
                                        </div>

                                        <div>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                value="10"
                                                id="Last10Mins"
                                                name='timeFilter'
                                                onChange={(e) => setAllFilters({ ...AllFilters, DatePosted: e.target.value })}
                                            />
                                            <label
                                                className="form-check-label"
                                                for="Last10Mins"
                                            >
                                                Last 10 Minutes
                                            </label>
                                        </div>

                                        <div>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                value="24"
                                                id="Last24Hours"
                                                name='timeFilter'
                                                onChange={(e) => setAllFilters({ ...AllFilters, DatePosted: e.target.value })}
                                            />
                                            <label
                                                className="form-check-label"
                                                for="Last24Hours"
                                            >
                                                Last 24 Hours
                                            </label>
                                        </div>

                                        <div>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                value="3"
                                                id="Last3Days"
                                                name='timeFilter'
                                                onChange={(e) => setAllFilters({ ...AllFilters, DatePosted: e.target.value })}
                                            />
                                            <label
                                                className="form-check-label"
                                                for="Last3Days"
                                            >
                                                Last 3 Days
                                            </label>
                                        </div>

                                        <div>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                value="7"
                                                id="Last7Days"
                                                name='timeFilter'
                                                onChange={(e) => setAllFilters({ ...AllFilters, DatePosted: e.target.value })}
                                            />
                                            <label
                                                className="form-check-label"
                                                for="Last7Days"
                                            >
                                                Last 7 Days
                                            </label>
                                        </div>

                                        <div>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                value="15"
                                                id="Last15Days"
                                                name='timeFilter'
                                                onChange={(e) => setAllFilters({ ...AllFilters, DatePosted: e.target.value })}
                                            />
                                            <label
                                                className="form-check-label"
                                                for="Last15Days"
                                            >
                                                Last 15 Days
                                            </label>
                                        </div>

                                        <div>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                value="30"
                                                id="Last30Days"
                                                name='timeFilter'
                                                onChange={(e) => setAllFilters({ ...AllFilters, DatePosted: e.target.value })}
                                            />
                                            <label
                                                className="form-check-label"
                                                for="Last30Days"
                                            >
                                                Last 30 Days
                                            </label>
                                        </div>
                                    </div>


                                    <div className='col-md-2'>
                                        <label htmlFor="ContractTypes">
                                            {/* Contract Types */}
                                            Tipo de Contrato
                                        </label>
                                        <div className="form-check mt-2">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value="Prácticas"
                                                id="Prácticas"
                                                onChange={(e) => handleSelectedFilterChange('ContractTypes', e)}
                                            />
                                            <label
                                                className="form-check-label"
                                                for="Prácticas"
                                            >
                                                Prácticas
                                            </label>
                                        </div>

                                        <div className="form-check mt-2">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value="Jornada Completa"
                                                id="Jornada Completa"
                                                onChange={(e) => handleSelectedFilterChange('ContractTypes', e)}
                                            />
                                            <label
                                                className="form-check-label"
                                                for="Jornada Completa"
                                            >
                                                Jornada Completa
                                            </label>
                                        </div>

                                        <div className="form-check mt-2">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value="Media Jornada"
                                                id="Media Jornada"
                                                onChange={(e) => handleSelectedFilterChange('ContractTypes', e)}

                                            />
                                            <label
                                                className="form-check-label"
                                                for="Media Jornada"
                                            >
                                                Media Jornada
                                            </label>
                                        </div>

                                        <div className="form-check mt-2">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value="Contrato Fijo"
                                                id="Contrato Fijo"
                                                onChange={(e) => handleSelectedFilterChange('ContractTypes', e)}
                                            />
                                            <label
                                                className="form-check-label"
                                                for="Contrato Fijo"
                                            >
                                                Contrato Fijo
                                            </label>
                                        </div>
                                    </div>

                                    <div className='col-md-2'>
                                        <label htmlFor="jobType" >
                                            {/* JobType */}
                                            Tipo de Empleo 
                                        </label>
                                        {/* <Select
                                            isMulti
                                            options={jobTypesOptions}
                                            onChange={(selectedOption) => console.log(selectedOption)}
                                        /> */}
                                        <div className="form-check mt-2">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value="Remoto"
                                                id="Remoto"
                                                onChange={(e) => handleSelectedFilterChange('JobType', e)}
                                            />
                                            <label
                                                className="form-check-label"
                                                for="Remoto"
                                            >
                                                Remoto
                                            </label>
                                        </div>

                                        <div className="form-check mt-2">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value="Presencial"
                                                id="Presencial"
                                                // onChange={(e) => setAllFilters({ ...AllFilters, jobType: e.target.value })}
                                                onChange={(e) => handleSelectedFilterChange('JobType', e)}
                                            />
                                            <label
                                                className="form-check-label"
                                                for="Presencial"
                                            >
                                                Presencial
                                            </label>
                                        </div>

                                        <div className="form-check mt-2">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value="Híbrido"
                                                id="Híbrido"
                                                // onChange={(e) =>  setAllFilters({ ...AllFilters, jobType: e.target.value })}
                                                onChange={(e) => handleSelectedFilterChange('JobType', e)}
                                            />
                                            <label
                                                className="form-check-label"
                                                for="Híbrido"
                                            >
                                                Híbrido
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className='form-row mt-2'>
                                    <div className='col-md-4'>
                                        <label htmlFor="yearsExperience">
                                            Years of Experience
                                        </label>
                                        <select
                                            className='form-control'
                                            onChange={(e) => setAllFilters({ ...AllFilters, yearsOfExperience: e.target.value })}
                                        >
                                            <option value=""> Select </option>
                                            <option value="0">{"<1"}</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">{">10"}</option>
                                        </select>
                                    </div>
                                    <div className='col-md-4'>
                                        <label htmlFor="salary"> Salary Range </label>
                                        <div className='row ml-2'>
                                            <input
                                                className="form-control col-md-4"
                                                type="number"
                                                placeholder='Min'
                                                min={0}
                                                onChange={(e) => setAllFilters({ ...AllFilters, salaryMin: e.target.value })}
                                            />
                                            <input
                                                className="form-control col-md-4 ml-2"
                                                type="number"
                                                placeholder='Max'
                                                max={10000000}
                                                onChange={(e) => setAllFilters({ ...AllFilters, salaryMax: e.target.value })}
                                            />
                                            <select
                                                className='form-control col-md-2 ml-2'
                                                onChange={(e) => setAllFilters({ ...AllFilters, salarySpecification: e.target.value })}
                                            >
                                                <option value=""> Select </option>
                                                <option value="LPA">LPA</option>
                                                <option value="USD">USD</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <label htmlFor="designation"> Designation </label>
                                        <Select
                                            options={designations}
                                            onChange={(selectedOption) => setAllFilters({ ...AllFilters, jobDesignation: selectedOption.value })}
                                        />
                                    </div>
                                </div> */}

                                {/* <div className="form-row mt-2">
                                    <div className='col-md-4'>
                                        <label htmlFor="location"> Location Type</label>
                                        <select
                                            className='form-control'
                                            onChange={(e) => setAllFilters({ ...AllFilters, locationType: e.target.value })}
                                        >
                                            <option value=""> Select </option>
                                            <option value="Remote">Remote</option>
                                            <option value="InOffice">In Office</option>
                                            <option value="Hybrid">Hybrid</option>
                                        </select>
                                    </div>
                                </div> */}
                                {/* <label htmlFor="jobType mt-4"> Select Location </label> */}

                                {/* <div className='form-row mt-3'>
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
                                                setSelectedCity(selectedOps.map((city) => city.value));
                                                setAllFilters({ ...AllFilters, citiesFilter: selectedOps.map((city) => city.value) })
                                            }}
                                        />
                                    </div>
                                </div> */}
                                {/* <div className='d-flex justify-content-end m-4' >
                                    <p
                                        onClick={handleClearFilter}
                                        style={{
                                            width: '8rem',
                                            marginTop: '0.5rem',
                                            marginBottom: '2vw',
                                            padding: '5',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Clear
                                    </p>
                                    <ButtonChakra
                                        p={5}
                                        width={'8rem'}
                                        borderRadius={'50px'}
                                        bgColor={'#E4B49D'}
                                        marginBottom={'2vw'}
                                        onClick={handleApplyFilter}
                                    >
                                        Apply
                                    </ButtonChakra>

                                </div> */}

                            </div>
                        }
                    </div>

                    {/* Filter Section Ends */}

                    {/* All Jobs and  Applied Jobs  */}
                    {/* <div className='container mb-0 m-5 '>
                        <div className='d-flex mb-0' >
                            <div className='ml-2'
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                    setAllJobsValue(true);
                                    setApplied(false);
                                }}
                            >
                             
                                <p> Todas las ofertas  </p>
                            </div>
                            <div className='ml-3'
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                    setAllJobsValue(false);
                                    setApplied(true);
                                }}
                            >
                                <p
                                    onClick={() => AppliedJobsByUser()}
                                >
                                    Solicitadas
                                </p>
                            </div>
                        </div>
                        <hr />
                    </div> */}
                    <Tabs>
                        <TabList className='container mb-0 '>
                            <Tab>Todas las ofertas</Tab>
                            <Tab
                                onClick={() => AppliedJobsByUser()}
                            >Solicitadas</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                {
                                    (
                                        <div className={styles.jobContainer}>
                                            <div className="row">
                                                {
                                                    (Array.isArray(!IsFilteredCheck ? items : filteredJobs) ? (!IsFilteredCheck ? items : filteredJobs) : []).map((job, index) => (
                                                        // items && items?.map((job, index) => (
                                                        <div className={`col-xl-4 col-lg-6 col-md-6 col-sm-12 `}
                                                            style={{ marginTop: '1vw', cursor: 'pointer' }}
                                                            onClick={() => window.open(`/AllJobs/${job._id}`, '_blank')}
                                                        // onClick={() => navigate(`/AllJobs/${job._id}`)}
                                                        >
                                                            <Card
                                                                style={{ width: '100%', marginBottom: '1vw' }}
                                                                className={`${styles.cardContainer}`}
                                                            >
                                                                <Card.Body>
                                                                    <div className="d-flex align-items-center">
                                                                        {job?.recruiter_info?.company_logo ?
                                                                            <img
                                                                                src={job?.recruiter_info?.company_logo}
                                                                                alt="Logo"
                                                                                style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '7px' }}
                                                                            />
                                                                            :
                                                                            <BsBuildings
                                                                                style={{ width: '50px', height: '30px', marginRight: '10px', borderRadius: '7px' }}
                                                                                aria-label="Logo"
                                                                            />
                                                                        }
                                                                        <div>
                                                                            <Card.Title>{job.jobTitle}</Card.Title>
                                                                            {/* <p className="card-text text-muted mb-2">{job.created_at}</p> */}
                                                                            <p className="card-text text-muted mb-2">
                                                                                {/* Posted:{job?.created_at &&
                                                                `${formatDistanceToNow(job.created_at)} ago`} */}
                                                                                Subido : {job?.created_at &&
                                                                                    `${formatDistanceToNow(job.created_at, { addSuffix: true, locale: es })}`}
                                                                            </p>
                                                                            <small> {job.company_name} </small>
                                                                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                                                        </div>
                                                                    </div>
                                                                    <Card.Text className='d-flex text-muted'
                                                                        style={{
                                                                            fontSize: '1rem',
                                                                            padding: '1vw',
                                                                            marginLeft: '3vw'
                                                                        }}
                                                                    >
                                                                        <div className='d-flex '>
                                                                            <TbBriefcase className={styles.jobIconSmall} />
                                                                            <p className={styles.paraSmallHeading}>
                                                                                {job.workExperienceMin}-{job.workExperienceMax}
                                                                                {/* years */}
                                                                                &nbsp;años
                                                                            </p>
                                                                        </div>
                                                                        <div className='d-flex ml-2'>
                                                                            <FaWallet className={styles.jobIconSmall} />
                                                                            <p className={styles.paraSmallHeading}>
                                                                                {job.salaryStart}-{job.salaryEnd} {job.salarySpecification}
                                                                            </p>
                                                                        </div>
                                                                        <div className='d-flex ml-2'>
                                                                            <FaLocationDot className={styles.jobIconSmall} />
                                                                            <p className={styles.paraSmallHeading} data-tooltip={job.jobLocation}>
                                                                                <TooltipParagraph text={job.jobLocation} />
                                                                            </p>
                                                                        </div>
                                                                    </Card.Text>
                                                                    <hr />
                                                                    <div className='d-flex'>
                                                                        <small style={{ flex: '1' }}>
                                                                            {/* Apply by : */}
                                                                            Subido el &nbsp;
                                                                            {new Date(job.joiningDate).toLocaleDateString()}</small>
                                                                        {/* <Button variant="success" style={{ flex: '1' }}>View</Button> */}
                                                                        <ButtonChakra
                                                                            // colorScheme='linkedin'
                                                                            p={5}
                                                                            width={'8rem'}
                                                                            borderRadius={'50px'}
                                                                            bgColor={'#E4B49D'}
                                                                        >
                                                                            {/* Apply */}
                                                                            Solicitar 
                                                                        </ButtonChakra>

                                                                    </div>
                                                                </Card.Body>
                                                            </Card>
                                                        </div>
                                                    ))}
                                            </div>
                                            {hasMorejobs && lazyLoadingJobs &&
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        height: '10vh'
                                                    }}
                                                >
                                                    <PuffLoader
                                                        color="red"
                                                        size={70}
                                                    />
                                                </div>
                                            }
                                        </div>
                                    )
                                }
                            </TabPanel>
                            <TabPanel>
                                {

                                    loadingApplied ? (
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '100vh'
                                        }}>
                                            <PuffLoader
                                                color="red"
                                                size={70}
                                            />
                                        </div>
                                    )
                                        :

                                        AppliedJobs.length > 0 &&
                                        <div className={styles.jobContainer} style={{ cursor: 'not-allowed' }} >
                                            <div className="row " >
                                                {AppliedJobs?.map((job, index) => (
                                                    <div className={`col-xl-4 col-lg-6 col-md-6 col-sm-12 `
                                                    }
                                                        style={{ marginTop: '1vw', }}
                                                    // onClick={() => window.open(`/AllJobs/${job._id}`, '_blank')}
                                                    >
                                                        <Card
                                                            style={{ width: '100%', marginBottom: '1vw' }}
                                                            className={`${styles.cardContainer}`}
                                                        >
                                                            <Card.Body>
                                                                <div className="d-flex align-items-center">
                                                                    {job?.recruiter_info?.company_logo ?
                                                                        <img
                                                                            src={job?.recruiter_info?.company_logo}
                                                                            alt="Logo"
                                                                            style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '7px' }}
                                                                        />
                                                                        :
                                                                        <BsBuildings
                                                                            style={{ width: '50px', height: '30px', marginRight: '10px', borderRadius: '7px' }}
                                                                            aria-label="Logo"
                                                                        />
                                                                    }
                                                                    <div>
                                                                        <Card.Title>{job.jobTitle}</Card.Title>
                                                                        {/* <p className="card-text text-muted mb-2">{job.created_at}</p> */}
                                                                        <p className="card-text text-muted mb-2">
                                                                            {/* Posted:{job?.created_at &&
                                                    `${formatDistanceToNow(job.created_at)} ago`} */}
                                                                            Subido : {job?.created_at &&
                                                                                `${formatDistanceToNow(job.created_at, { addSuffix: true, locale: es })}`}
                                                                        </p>
                                                                        <small> {job.company_name} </small>
                                                                        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                                                    </div>
                                                                </div>
                                                                <Card.Text className='d-flex text-muted'
                                                                    style={{
                                                                        fontSize: '1rem',
                                                                        padding: '1vw',
                                                                        marginLeft: '3vw'
                                                                    }}
                                                                >
                                                                    <div className='d-flex '>
                                                                        <TbBriefcase className={styles.jobIconSmall} />
                                                                        <p className={styles.paraSmallHeading}>
                                                                            {job.workExperienceMin}-{job.workExperienceMax}
                                                                            {/* years */}
                                                                            &nbsp;años
                                                                        </p>
                                                                    </div>
                                                                    <div className='d-flex ml-2'>
                                                                        <FaWallet className={styles.jobIconSmall} />
                                                                        <p className={styles.paraSmallHeading}>
                                                                            {job.salaryStart}-{job.salaryEnd} {job.salarySpecification}
                                                                        </p>
                                                                    </div>
                                                                    <div className='d-flex ml-2'>
                                                                        <FaLocationDot className={styles.jobIconSmall} />
                                                                        <p className={styles.paraSmallHeading} data-tooltip={job.jobLocation}>
                                                                            <TooltipParagraph text={job.jobLocation} />
                                                                        </p>
                                                                    </div>
                                                                </Card.Text>
                                                                <hr />
                                                                <div className='d-flex'>
                                                                    <small style={{ flex: '1' }}>
                                                                        {/* Apply by : */}
                                                                        Subido el &nbsp;
                                                                        {new Date(job.joiningDate).toLocaleDateString()}</small>
                                                                    {/* <Button variant="success" style={{ flex: '1' }}>View</Button> */}
                                                                    <ButtonChakra
                                                                        // colorScheme='linkedin'
                                                                        p={5}
                                                                        width={'8rem'}
                                                                        borderRadius={'50px'}
                                                                        bgColor={'#E4B49D'}
                                                                        style={{ cursor: 'not-allowed' }}
                                                                    >
                                                                        Applied
                                                                    </ButtonChakra>

                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                }
                            </TabPanel>
                        </TabPanels>
                    </Tabs>




                </div>
            )}
            {/* <h4> Items Start  </h4>
            <div className='container'>
                <div className='row'>
                    {items?.map((item) => (
                        // <ProductCard data={item} key={item.id} />
                        <>
                            <h3> {item.jobTitle} </h3>
                            <h5>  {item.jobDescription}  </h5>
                        </>



                    ))}
                </div>
                {loadingPage && <PuffLoader />}
            </div>
            <h4> Items End  </h4> */}
        </>
    )
}

export default AllJobs
