import React from 'react';
import Cards from './Cards';
import CSS from './MidImage.module.css';
import SearchBar from './SearchBar';
import { Flex } from '@chakra-ui/react';


const MidImage = () => {
    return (
        <div className={CSS.mainContainer}>
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