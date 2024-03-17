import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { CiSearch } from "react-icons/ci";
import { Flex, useEventListenerMap } from "@chakra-ui/react";
import axios from 'axios'

import LeftSidebar from "./LeftSidebar";
import CSS from './SearchBar.module.css'
import { FaArrowUpAZ } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { courseSearchAction } from '../../redux/actions/courseAdmin';

const SearchBar = () => {

    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);
    const [courseCompany, setCourseCompany] = useState([])
    const [AllFilter, setAllFilter] = useState({
        courseProvider: '',
        keyword: '',
    })
    let CourseNames = [];

    const serverURL = 'http://localhost:5000'

    const handleApplyFilter = async () => {
        const params = new URLSearchParams(AllFilter).toString();
        console.log(params);
        const response = await dispatch(courseSearchAction(params));
        if(response.success){
            console.log(response.data);
        }else{
            console.log(response.message);
        }
    }

    const getCourseNames = async () => {
        const response = await axios.get(`${serverURL}/courses/allCompanies`);
        console.log(response);
        if (response.data.success) {
            CourseNames = response?.data?.result;
            const courseNameOptions = CourseNames.map((CourseName) => {
                return { value: CourseName, label: CourseName }
            })
            setCourseCompany(courseNameOptions)
            console.log('CourseNames', courseNameOptions);
        }
    }

    useEffect(() => {
        getCourseNames();
    }, [])

    return (
        <div>
            <div className={`${CSS.mainContainer} d-flex justify-content-center align-items-center`}>
                <div className="d-flex w-100">
                    <div className='col-md-4'>
                        <label className="mt-2 ml-2" htmlFor="courseProvider"> Course Provider </label>
                        <Select     
                            options={courseCompany}
                            onChange={(e) => setAllFilter({ ...AllFilter, courseProvider: e.value })}
                        />
                    </div>
                    {/* keyword */}
                    <div className='ml-3 flex-grow-1'>
                        <label className="mt-2" htmlFor="keyword"> KeyWord </label>
                        <input
                            className='form-control'
                            type="text"
                            onChange={(e) => setAllFilter({ ...AllFilter, keyword: e.target.value })}
                        />
                    </div>

                    {/* Where  */}

                    {/* <div className='ml-3 flex-grow-1'>
                        <label className="mt-2 ml-2" htmlFor="where">Where</label>
                        <input className='form-control' type="text" />
                    </div> */}

                    {/* Search button  */}
                    <Flex>
                        <div className='mt-4 pt-3 flex-grow-1'>
                            <button
                                onClick={handleApplyFilter}
                                className={`${CSS.btnP} mr-2 ml-2`}
                            >
                                <Flex align="center" justify="center">
                                    <CiSearch size={25} />Find Course </Flex>
                            </button>
                            {
                                isOpen ? <LeftSidebar onClose={onClose} /> :
                                    <button className={`${CSS.btnF} mr-2`} onClick={onOpen}>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z">
                                            </path>
                                        </svg>
                                    </button>
                            }

                        </div>
                    </Flex>
                </div>

            </div>
        </div>
    )
}

export default SearchBar