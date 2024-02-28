import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// React bootstrap
import Modal from 'react-bootstrap/Modal'
import { Button, Toast } from 'react-bootstrap';
// Loader
import PuffLoader from "react-spinners/PuffLoader";
// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// react icons 
import { FaPencil } from "react-icons/fa6";
import { TiInfoLarge } from "react-icons/ti";
import { CiSquarePlus } from "react-icons/ci";


import PrCss from './userProfile.module.css';
import { deleteAddInfoAction, getAddInfoAction, setAddInfoAction, updateAddInfoAction } from '../../redux/actions/userProfile/userAddInfo';
import { RxPencil1 } from 'react-icons/rx';



function MyVerticallyCenteredModal(props) {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [additionalDesc, setAdditionalDesc] = useState('');
    const dispatch = useDispatch();

    const handleAddInfo = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!title || !additionalDesc) {
            return toast.error('Please fill all the fields');
        }

        const additionalInfo = {
            title,
            description: additionalDesc,
            userId: id
        }

        const response = await dispatch(setAddInfoAction(additionalInfo));
        if (response.success) {
            const resp2 = await dispatch(getAddInfoAction(id));
            if (resp2.success) {
                props.onHide();
            } else {
                toast.info('Please Refresh the page to see the changes');
            }
        } else {
            toast.error('Error in adding Additional Information');
        }
        setLoading(false);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={props.onHide}
        >
            <Modal.Header closeButton  >
                <Modal.Title id="contained-modal-title-vcenter">
                    <span ><TiInfoLarge /> Add Additional Information  </span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-group">
                        <label htmlFor="title"> Title </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Add a title"
                        />
                    </div>
                    <div class="form-group">
                        <textarea
                            class="form-control"
                            onChange={(e) => setAdditionalDesc(e.target.value)}
                            placeholder='Add other information such as personal website , blog , articles etc.'
                            rows="3">
                        </textarea>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(event) => { event.stopPropagation(); props.onHide(); }} className='btn btn-secondary'> Close</Button>
                <Button onClick={handleAddInfo}>
                    {loading ? <>
                        <div className='d-flex'>
                            <PuffLoader
                                size={25}
                                color="#ffffff"
                            /> <span className='pl-2'> Submitting... </span>
                        </div>
                    </> : 'Submit'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}


function MyVerticallyCenteredModalEditAddInfo(props) {

    const { id } = useParams();
    const delId = props.delid;
    const editId = props.editid;
    const allInfo = props.addinfo;
    const [loading, setLoading] = useState(false);
    const [delLoading, setdelLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [additionalDesc, setAdditionalDesc] = useState('');

    const dispatch = useDispatch();

    const singleInfo = allInfo?.filter((info) => info?._id === editId)[0];

    useEffect(() => {
        setTitle(singleInfo?.title);
        setAdditionalDesc(singleInfo?.description);
    }, [singleInfo])

    const handleupdateAddInfo = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!title || !additionalDesc) {
            setLoading(false);
            return toast.error('Please fill all the fields');
        }

        const additionalInfo = {
            title,
            description: additionalDesc,
        }

        const response = await dispatch(updateAddInfoAction(editId, additionalInfo));
        if (response.success) {
            const resp2 = await dispatch(getAddInfoAction(id));
            if (resp2.success) {
                props.onHide();
            } else {
                toast.info('Please Refresh the page to see the changes');
            }
        } else {
            toast.error('Error in adding Additional Information');
        }
        setLoading(false);
    }

    const handleDeleteAddinfo = async (e) => {
        e.preventDefault();
        setdelLoading(true);
        const response = await dispatch(deleteAddInfoAction(delId));
        if (response.success) {
            const resp2 = await dispatch(getAddInfoAction(id));
            if (resp2.success) {
                props.onHide();
            } else {
                toast.info('Please Refresh the page to see the changes');
            }
        } else {
            toast.error('Error in deleting Language');
        }
        setdelLoading(false);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={props.onHide}
        >
            <Modal.Header closeButton  >
                <Modal.Title id="contained-modal-title-vcenter">
                    <span ><TiInfoLarge /> Edit your Additional Information  </span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-group">
                        <label htmlFor="title"> Title </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Add a title"
                        />
                    </div>
                    <div class="form-group">
                        <textarea
                            class="form-control"
                            value={additionalDesc}
                            onChange={(e) => setAdditionalDesc(e.target.value)}
                            placeholder='Add other information such as personal website , blog , articles etc.'
                            rows="3">
                        </textarea>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(event) => { event.stopPropagation(); props.onHide(); }} className='btn btn-secondary'> Close</Button>
                <Button onClick={handleDeleteAddinfo} className='btn btn-danger' >
                    {delLoading ? <>
                        <div className='d-flex'>
                            <PuffLoader
                                size={25}
                                color="#ffffff"
                            /> <span className='pl-2'> Removing ... </span>
                        </div>
                    </> : 'Remove Language'}

                </Button>
                <Button onClick={handleupdateAddInfo}>
                    {loading ? <>
                        <div className='d-flex'>
                            <PuffLoader
                                size={25}
                                color="#ffffff"
                            /> <span className='pl-2'> Submitting... </span>
                        </div>
                    </> : 'Submit'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

const AdditionalUserInfo = () => {

    const [modalShow, setModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editId, setEditId] = useState(null);
    const [delId, setDelId] = useState(null);

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAddInfoAction(id));
    }, []);

    const allAddInfo = useSelector((state) => state.getAddInfoReducer);
    const singleAddInfo = allAddInfo?.data?.result;

    return (
        <div id='additionlInfoScroll'> 
            <ToastContainer />
            {
                (singleAddInfo?.length === 0 || singleAddInfo === undefined) ?
                    <>
                        <div
                            className={` ${PrCss.addSections}`}
                            style={{ cursor: 'pointer' }}
                            onClick={() => setModalShow(true)}
                        >
                            <div className="card w-100">
                                <div className="card-body text-center">
                                    <i className='fa-solid fa-plus'></i>
                                    <p className='card-text'> Add Additional Info  </p>
                                </div>
                            </div>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    </> :
                    <>
                        <div class="card mt-3"
                            style=
                            {{
                                boxShadow: '14px 10px 20px 3px #d3beae',
                                borderRadius: '25px 25px 25px 25px'
                            }}
                        >
                            <div className='mt-2 p-3'
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <h5 style={{ fontWeight: '600' }}> Additional Information </h5>
                                <div onClick={() => setModalShow(true)} style={{ cursor: 'pointer' }} >
                                    <CiSquarePlus size={'35'} />
                                </div>
                            </div>
                            {singleAddInfo?.map((info, index) => {
                                return (
                                    <div
                                        key={index}
                                    >
                                        <div className="card w-100">
                                            <div className="card-body">
                                                <div className='d-flex '>
                                                    <h5 className="card-title"> {info.title} </h5>
                                                    <div onClick={() => { setEditId(info._id); setDelId(info._id) }}>
                                                        <RxPencil1
                                                            style={{ cursor: 'pointer',marginLeft:'1rem' }}
                                                            onClick={() => setEditModalShow(true)}
                                                        />
                                                    </div>
                                                </div>
                                                <p className="card-text"> {info.description} </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                            <MyVerticallyCenteredModalEditAddInfo
                                show={editModalShow}
                                addinfo={singleAddInfo}
                                editid={editId}
                                delid={delId}
                                onHide={() => setEditModalShow(false)}
                            />
                        </div>
                    </>
            }
        </div>
    )
}

export default AdditionalUserInfo
