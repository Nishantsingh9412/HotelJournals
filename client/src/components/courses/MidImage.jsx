import React from 'react';
import Cards from './Cards';
import CSS from './MidImage.module.css';
import SearchBar from './SearchBar';
import { Flex } from '@chakra-ui/react';


const MidImage = () => {
    return (
        <div className={CSS.mainContainer}>
            {/* <LeftSidebar /> */}
            {/* <div className={`${CSS.sidebar} ${CSS.sidebarClosed}`}>
                <div className='ml-2 pb-3'>
                    <div className='d-flex justify-content-between'>
                        <h6 className='mt-2'>FILTER BY</h6>
                        <h6 className='mt-2 mr-4'>
                            <FaTimes size={15} color='black' /> clear
                        </h6>
                    </div>
                    <hr style={{ background: '#E4B49D' }} />

                    <h6 className='font-weight-bold'>Course Types</h6>
                    <div className='ml-3'>
                        <CheckBox content={'Bachelors'} />
                        <CheckBox content={'Masters'} />
                        <CheckBox content={'Professionals'} />
                        <CheckBox content={'Shorts'} />
                    </div>

                    <h6 className='font-weight-bold mt-3'>Course Languages</h6>
                    <div className='ml-3'>
                        <CheckBox content={'English'} />
                        <CheckBox content={'Spanish'} />
                        <CheckBox content={'French'} />
                        <CheckBox content={'Italian'} />
                        <CheckBox content={'Portuguese'} />
                        <CheckBox content={'German'} />
                    </div>

                    <h6 className='font-weight-bold mt-3'>Categories</h6>
                    <div className='ml-3'>
                        <CheckBox content={'Web Development'} />
                        <CheckBox content={'Data Science'} />
                        <CheckBox content={'Machine Learning'} />
                        <CheckBox content={'Mobile App Development'} />
                        <CheckBox content={'Cybersecurity'} />
                        <CheckBox content={'Digital Marketing'} />
                        <CheckBox content={'Sales and Marketing'} />
                        <CheckBox content={'Spa'} />
                        <CheckBox content={'Tourism'} />
                        <CheckBox content={'Business Skills'} />
                    </div>
                </div>
            </div> */}
            
            <div className={CSS.imageContainer}>
                <Flex flexDirection='column' alignItems='center' justifyContent='center'>
                    <div className='container'>
                        <SearchBar />
                    </div>
                    <Cards filter={true} />
                </Flex>
            </div>
        </div>
    );
};

export default MidImage;