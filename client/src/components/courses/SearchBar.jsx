import { CiSearch } from "react-icons/ci";
import React from 'react'

import CSS from './SearchBar.module.css'

const SearchBar = () => {
    return (
        <div>
            <div className={`${CSS.mainContainer}  d-flex`}>
                <div className='ml-5'>
                    <label  className="ml-2" htmlFor="courseProvider"> Course Provider </label>
                    <select  className='form-control' name="" id="">
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
                <div className='ml-3'>
                    <label  className="ml-2"htmlFor="keyword"> KeyWord </label>
                    <input className='form-control'  type="text" />
                </div>

                {/* Where  */}

                <div className='ml-3'>
                    <label className="ml-2" htmlFor="where">Where</label>
                    <input className='form-control' type="text" />
                </div>

                {/* Search button  */}
                <div className='mt-4 ml-4'>
                    <button className={ `${CSS.btnP}`} > <CiSearch size={25} /> Check Jobs  </button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
