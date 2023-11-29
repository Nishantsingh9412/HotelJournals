// modules
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

// files
import { DeleteATip } from '../../../redux/actions/tipsAdmin';
import { GetTips } from '../../../redux/actions/tipsAdmin'

// Icons 
import { FaPencil } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";


const Dashboard = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    console.log("This is the id: ", id);

    const imgStyleTipsSection = {
        width: '340px',
        height: '243px',
        // borderRadius:'10px',
    }
    const dispatch = useDispatch();
    const AllTips = useSelector((state) => state.getTipsReducer)
    const baseURL = "http://localhost:3000/"
    const serverURL = "http://localhost:5000/"

    useEffect(() => {
        dispatch(GetTips());
    }, [dispatch]);

    const handleDelete = (id) => {
        const result = window.confirm("Are you sure you want to delete this tip ?");
        if (result) {
            console.log("Delete the tip")
            handleConfirmedDelete(id);
            // Add your delete operation here
        } else {
            navigate('/dashboard');
            console.log("Cancelled")
            
            // Handle the cancel operation here
        }
    }

    

    const handleConfirmedDelete = (id) => {
        dispatch(DeleteATip(id));
        navigate('/dashboard');
        console.log("Tip Deleted Successfully")
        toast.success("Tip deleted successfully");

    }
    return (

        // <div>
        //     <div className='container'>
        //         <h2 className='pt-4 mb-4'> Admin Dashboard  </h2>
        //         <button className='btn btn-primary'>
        //             <NavLink to='/admintips'  >
        //                 Add a new Tip
        //             </NavLink>
        //         </button>
        //         <button className='ml-2 btn btn-primary'> 
        //             <NavLink to='/adminjobs'  >
        //                 Update existing Tip
        //             </NavLink>
        //         </button>

        //     </div>

        // </div>



        // Get all states 
        // const state = useSelector((state) => state)

        // const state = useSelector((state) => state)
        // console.log("This is currentTip \n : ")
        // console.log(state);

        // Check for first Tip 
        // if (AllTips.result) {
        //     console.log("The first tip is: ", AllTips.result[0]);
        // }

        <>
            <Toaster />
            <div className='container'>
                <h2 className='pt-4 mb-4'> Admin Dashboard  </h2>
                <button className='btn btn-primary text-white'>
                    <NavLink to='/admintips'  >
                        Add a new Tip
                    </NavLink>
                </button>
            </div>


            <div className='container flex flex-wrap justify-center gap-4 mb-4 mt-5 pt-3'>
                <div className="card-deck d-flex flex-wrap justify-content-start">
                    {AllTips?.result?.map((tip, index) => (
                        <div className="card m-2 " style={{ flex: '0 0 30%', border: '1px solid #E4B49D', }} key={tip._id}>
                            <img className="card-img-top " src={`${serverURL + tip.image}`} alt="Card image cap" style={imgStyleTipsSection} />
                            <div className="card-body">
                                <h5 className="card-title text-center">{tip.title}</h5>
                                <p className="card-text fw-light" style={{ opacity: 0.9 }}>{tip.shortDescription.substr(0, 150)}....</p>
                                {/* <div dangerouslySetInnerHTML={{ __html: tip.description.substr(0,100) }} /> */}
                                {/* <NavLink to={`${baseURL}test/${tip._id}`} >  
                                <button className='mt-3 btn btn-dark'> Read More  </button>
                            </NavLink> */}
                                <button className='btn btn-danger' onClick={() => handleDelete(tip._id)}> 
                                    <NavLink to={`/dashboard/${tip._id}`}>
                                        Delete 
                                    </NavLink>  
                                        <IoTrashBin /> 
                                    </button>
                                 
                                <button className='btn btn-info ml-4'> Edit <FaPencil /> </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Dashboard
