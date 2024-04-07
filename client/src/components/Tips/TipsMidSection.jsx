import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { GetTips } from '../../redux/actions/tipsAdmin'

const TipsMidSection = () => {

    const imgStyleTipsSection = {
        width:'340px',
        height:'243px',
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
            <div className="card-deck d-flex flex-wrap justify-content-start">
                {AllTips?.result?.map((tip, index) => (
                    <div className="card m-2 " style={{flex: '0 0 30%',border:'1px solid #E4B49D',}} key={tip._id}>
                        <img className="card-img-top " src={`${serverURL + tip.image}`} alt="Card image cap" style={imgStyleTipsSection} />
                        <div className="card-body">
                            <h5 className="card-title text-center">{tip.title}</h5>
                            <p className="card-text fw-light" style={{opacity:0.9}}>{tip.shortDescription.substr(0,150)}....</p>
                            {/* <div dangerouslySetInnerHTML={{ __html: tip.description.substr(0,100) }} /> */}
                            <NavLink to={`${baseURL}test/${tip._id}`} >  
                                <button className='mt-3 btn btn-dark'> Read More  </button>
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TipsMidSection
