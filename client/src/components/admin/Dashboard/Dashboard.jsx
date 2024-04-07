// modules
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { Button, ButtonGroup } from '@chakra-ui/react'

// files
import { DeleteATip } from '../../../redux/actions/tipsAdmin';
import { GetTips } from '../../../redux/actions/tipsAdmin'

// Icons 
import { FaPencil, FaPlus } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";
import { FaEye } from 'react-icons/fa';


const Dashboard = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    console.log("This is the id: ", id);

    const imgStyleTipsSection = {
        width: '100%',
        height: '243px',
        // borderRadius:'10px',
    }
    const dispatch = useDispatch();
    const AllTips = useSelector((state) => state.getTipsReducer)
    const baseURL = "http://localhost:3000/"
    const serverURL = process.env.REACT_APP_SERVER_URL_XTRA_SLASH;

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
            navigate('/superadmin/tips');
            console.log("Cancelled")

            // Handle the cancel operation here
        }
    }

    const handleConfirmedDelete = (id) => {
        dispatch(DeleteATip(id));
        navigate('/superadmin/tips');
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
                <div>
                </div>


                <h2 className='pt-1 mb-1'> Tips Dashboard  </h2>
                <NavLink to='/superadmin/tips/post' style={{ textDecoration: 'none', color: 'white' }} >
                    <button className='btn btn-success text-white mt-2'>
                        {/* <NavLink to='/admintips' style={{ textDecoration: 'none', color: 'white' }} > */}
                        <span style={{ fontSize: '20px' }}> + </span> Add New Tip
                    </button>
                </NavLink>  
            </div>
            <div className='container flex flex-wrap justify-center gap-4 mb-4 mt-5 pt-3'>
                <div className="row">
                    {AllTips?.result?.map((tip, index) => (
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4" key={tip._id}>
                            <div className="card m-2" style={{ border: '1px solid #E4B49D' }}>
                                <img className="card-img-top img-fluid" src={`${serverURL + tip.image}`} alt="Card image cap" style={imgStyleTipsSection} />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{tip.title}</h5>
                                    <p className="card-text fw-light" style={{ opacity: 0.9 }}>{tip.shortDescription.substr(0, 150)}....</p>
                                    <div className='d-flex '>
                                        <Button
                                            colorScheme='red'
                                            onClick={() => handleDelete(tip._id)}
                                        >
                                            Delete
                                            <IoTrashBin style={{ marginLeft: '4px' }} />
                                        </Button>

                                        <NavLink
                                            style={{ textDecoration: 'none', color: 'white' }}
                                            // to={`/dashboard/updateTips/${tip._id}`}
                                            to={`/superadmin/tips/update/${tip._id}`}
                                        >
                                            <Button colorScheme='blue' ml='4'>
                                                Edit
                                                <FaPencil
                                                    style={{ marginLeft: '6px' }}
                                                />
                                            </Button>
                                        </NavLink>

                                        <NavLink
                                            style={{ textDecoration: 'none', color: 'white' }}
                                            to={`/test/${tip._id}`}
                                            target='_blank'
                                        >
                                            <Button colorScheme='messenger' ml='4'>
                                                View
                                                <FaEye
                                                    style={{ marginLeft: '6px' }}
                                                />
                                            </Button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Dashboard
