import { CiSearch } from "react-icons/ci";
import React, { useState } from 'react'
import LeftSidebar from "./LeftSidebar";
import CSS from './SearchBar.module.css'
import { Flex } from "@chakra-ui/react";

const SearchBar = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);

    return (
        <div>

            <div className={`${CSS.mainContainer} d-flex justify-content-center align-items-center`}>
                <div className="d-flex w-100">
                    <div>
                        <label className="mt-2 ml-2" htmlFor="courseProvider"> Course Provider </label>
                        <select className='form-control' name="" id="">
                            <option value=""> Select course provider </option>
                            <option value=""> Udemy </option>
                            <option value=""> Coursera </option>
                            <option value=""> Edx </option>
                            <option value=""> Udacity </option>
                            <option value=""> Future Learn </option>
                            <option value=""> Khan Academy </option>
                            <option value=""> Skillshare </option>
                            <option value=""> LinkedIn Learning </option>
                            <option value=""> Codecademy </option>
                            <option value=""> Datacamp </option>
                            <option value=""> Pluralsight </option>
                        </select>
                    </div>
                    {/* keyword */}
                    <div className='ml-3 flex-grow-1'>
                        <label className="mt-2" htmlFor="keyword"> KeyWord </label>
                        <input className='form-control' type="text" />
                    </div>

                    {/* Where  */}

                    <div className='ml-3 flex-grow-1'>
                        <label className="mt-2 ml-2" htmlFor="where">Where</label>
                        <input className='form-control' type="text" />
                    </div>

                    {/* Search button  */}
                    <Flex>
                        <div className='mt-4 pt-3 flex-grow-1'>
                            <button className={`${CSS.btnP} mr-2`} ><Flex align="center" justify="center"><CiSearch size={25} />Find Jobs</Flex>  </button>
                            {
                                isOpen ? <LeftSidebar onClose={onClose} /> :
                                    <button className={`${CSS.btnF} mr-2`} onClick={onOpen}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z"></path></svg></button>

                            }

                        </div>
                    </Flex>
                </div>

            </div>
        </div>
    )
}

export default SearchBar