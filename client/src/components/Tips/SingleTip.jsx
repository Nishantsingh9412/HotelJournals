import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import { GetSingleTips } from '../../redux/actions/tipsAdmin';

const SingleTip = () => {
  
  const {id} = useParams();
  const [loggedIn,isLoggedIn] = useState(true);
  console.log("This is id from single Tip: ", id);
  const dispatch = useDispatch();
  const SingleTip = useSelector((state) => state.singleTipReducer);
  const baseURL = "http://localhost:5000/"

  useEffect(() => {
    dispatch(GetSingleTips(id))
  },[dispatch,id])

    if (SingleTip) {
        console.log("The Single tip is: ", SingleTip?.data?.result?.title);
        console.log("The Single tip is: ", SingleTip.result);
    }

    
    
  return (
    <div style={{background:'F1F1EA'}}> 
      {/* <h2>u</h2> */}
        {/* <h2> This is single Tip </h2> */}
        {/* <h3> {SingleTip?.data?.result?.title} </h3> */}
        {/* <p> {SingleTip?.data?.result?.description} </p> */}
        <div className='container mt-2 ml-3'>
          {
            loggedIn ? (
          <center>
            {/* <button  className='btn btn-dark w-25 ml-5 mt-5 mb-5' > Edit Post  </button> */}
          </center>
            ) : <></>
          }
          
          <div dangerouslySetInnerHTML={{ __html: SingleTip?.data?.result?.description }} />
        </div>
                                    {/* <div dangerouslySetInnerHTML={{ __html: tip.description.substr(0,100) }} /> */}


        {/* <img src={`${baseURL + SingleTip?.image}`} alt="" /> */}
    </div>
  )
}

export default SingleTip
