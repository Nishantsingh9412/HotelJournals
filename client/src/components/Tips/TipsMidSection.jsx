import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import styles from './TipsMidsection.module.css'
import { GetTips } from '../../redux/actions/tipsAdmin'

const TipsMidSection = () => {

    // const imgStyleTipsSection = {
    //     // width:'340px',
    //     width:'22vw',
    //     // height:'243px',
    //     height:'22vh',
    //     // borderRadius:'10px',
    // }


    const imgStyleTipsSection = {
        // width: '50vw',  // 50% of the viewport's width
        // height: '35vh', // auto to maintain aspect ratio
        width: '100%',
        height: '200px',

        // objectFit: 'cover',
        // borderRadius:'10px',
    }
    const dispatch = useDispatch();
    const AllTips = useSelector((state) => state.getTipsReducer)
    const baseURL = "http://localhost:3000/"
    const serverURL = process.env.REACT_APP_SERVER_URL_XTRA_SLASH;

    useEffect(() => {
        dispatch(GetTips());
    }, [dispatch]);


    // Get all states 
    // const state = useSelector((state) => state)

    // const state = useSelector((state) => state)
    // console.log("This is currentTip \n : ")
    // console.log(state);

    // Check for first Tip 
    // if (AllTips.result) {
    //     console.log("The first tip is: ", AllTips.result[0]);
    // }



    return (
        <div className='container flex flex-wrap justify-center gap-4 mb-4 mt-5 pt-3'>
            <div className="row">
                {AllTips?.result?.map((tip, index) => (
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4" key={tip._id}>
                        <div
                            className="card m-2"
                            style={{ border: '1px solid #E4B49D' }}
                        >
                            <img
                                className="card-img-top img-fluid"
                                src={`${serverURL + tip.image}`}
                                alt="Card image cap"
                                style={imgStyleTipsSection}
                            />
                            <div className={`card-body ${styles.TipsParaDesc}`}>
                                <h5 className="card-title text-center">{tip.title}</h5>
                                <p className={`card-text fw-light `} style={{ opacity: 0.9 }}>
                                    {tip.shortDescription.substr(0, 150)}....
                                </p>
                                <NavLink to={`${baseURL}test/${tip._id}`} >
                                    <button className='mt-3 btn btn-dark'>
                                        {/* Read More */}
                                        Leer más
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TipsMidSection
