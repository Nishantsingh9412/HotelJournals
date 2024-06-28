import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// React Bootstrap
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
// Loader
import PuffLoader from "react-spinners/PuffLoader";

// Toaster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// react icons 
import { FaPencil } from "react-icons/fa6";
import { PiCertificateDuotone, PiPencil } from "react-icons/pi";
import { CiSquarePlus } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";

import PrCss from './userProfile.module.css';
import { deleteCertificateAction, getCertificatesAction, setCertificatesAction, updateCertificateAction } from '../../redux/actions/userProfile/userCertificates';
import { RxPencil1 } from 'react-icons/rx';

function MyVerticallyCenteredModal(props) {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [certificate_name, setCertificateName] = useState('');
    const [issued_by, setIssuedBy] = useState('');
    const [issued_on_month, setIssuedOnMonth] = useState('');
    const [issued_on_year, setIssuedOnYear] = useState('');
    // const [expiration_month, setExpirationMonth] = useState('');
    // const [expiration_year, setExpirationYear] = useState('');
    const [credential_id, setCredentialId] = useState('');
    const [credential_url, setCredentialUrl] = useState('');
    const dispatch = useDispatch();

    const isValidUrl = (url) => {
        const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(url);
    }

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1920 }, (_, i) => currentYear - i);
    const years2 = Array.from({ length: (currentYear + 20) - 1920 }, (_, i) => (currentYear + 20) - i);


    const handleAddCertification = async (e) => {
        e.preventDefault();
        if (!certificate_name || !issued_by || !issued_on_month || !issued_on_year) {
            return toast.error('Please fill mandatory fields');
        }
        // if (parseInt(issued_on_year) > parseInt(expiration_year)) {
        //     return toast.error('Expiration year should be less than issued year')
        // }
        // if(parseInt(issued_on_year) === parseInt(expiration_year) || ){

        if (credential_url && !isValidUrl(credential_url)) {
            return toast.error('Please enter a valid URL');
        }

        setLoading(true);

        const certificateData = {
            certificate_name: certificate_name,
            issued_by: issued_by,
            issue_month: issued_on_month,
            issue_year: issued_on_year,
            // expiration_month: expiration_month,
            // expiration_year: expiration_year,
            credential_id: credential_id,
            credential_url: credential_url,
            userId: id
        }

        const response = await dispatch(setCertificatesAction(certificateData))
        if (response.success) {
            const respo2 = await dispatch(getCertificatesAction(id))
            if (respo2) {
                props.onHide();
            } else {
                toast.info('Please referesh the page to see changes');
            }
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
            <Modal.Header
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
                closeButton
            >
                <Modal.Title id="contained-modal-title-vcenter"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',

                    }}
                >
                    <PiCertificateDuotone size={'25'} />
                    <h5 className='mt-2'>
                        {/* Add Liscence and certification */}
                        Añade tus licencias o certificaciones
                    </h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <h6><b> Wow the recruiters </b></h6> */}
                {/* <p> */}
                {/* Imagine that you're meeting the CEO of your dream company. What should you say to amaze them? */}
                {/* </p> */}
                <form>
                    <div className="form-group">
                        <label htmlFor="certificate_name">
                            {/* Certificate Name */}
                            Nombre del certificado &nbsp;
                            <small className='text-danger'>*</small>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setCertificateName(e.target.value)}
                            id="certificate_name"
                            // placeholder="Enter Certificate Name"
                            placeholder='Escribe el nombre de tu título '
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="issued_by">
                            {/* Issued By */}
                            Emitido por
                            <small className='text-danger'> * </small>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setIssuedBy(e.target.value)}
                            id="issued_by"
                            // placeholder="Enter Issuing organization name"
                            placeholder='Escribe el nombre de la organización'
                        />
                    </div>
                    <div>
                        <label htmlFor="issue_on">
                            {/* Issued on */}
                            Emitido el
                            <small className='text-danger'>*</small>
                        </label>
                        <div className="form-group row">
                            <div className='form-group col-md-6'>
                                <select
                                    className='form-control'
                                    onChange={(e) => setIssuedOnMonth(e.target.value)}
                                >
                                    <option value="">
                                        {/* Month */}
                                        Mes
                                    </option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <select
                                    className='form-control'
                                    onChange={(e) => setIssuedOnYear(e.target.value)}
                                >
                                    <option value="">
                                        {/* Year */}
                                        Año
                                    </option>
                                    {years.map((year) =>
                                        <option key={year} value={year}>{year}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <label htmlFor="expired_on">Expired on</label>
                        <div className='row'>
                            <div className="form-group col-md-6">
                                <select
                                    className='form-control'
                                    onChange={(e) => setExpirationMonth(e.target.value)}
                                >
                                    <option value="">
                                        
                                        Mes
                                    </option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <select
                                    className='form-control'
                                    onChange={(e) => setExpirationYear(e.target.value)}
                                >
                                    <option value="">
                                        
                                        Año
                                    </option>
                                    {years2.map((year) =>
                                        <option key={year} value={year}>{year}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="credential_id">
                            {/* Credential ID */}
                            Número de registro de título
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="credential_id"
                            onChange={(e) => setCredentialId(e.target.value)}
                            // placeholder="Enter Credential ID"
                            placeholder='Escribe el número de registro de tu título'
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="credential_url">
                            {/* Credential URL */}
                            URL del Título
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="credential_url"
                            onChange={(e) => setCredentialUrl(e.target.value)}
                            // placeholder="Enter Credential URL"
                            placeholder='Escribe la URL de tu título'
                        />
                    </div>
                </form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(event) => { event.stopPropagation(); props.onHide(); }} className='btn btn-secondary'>
                    {/* Close */}
                    Cerrar
                </Button>
                <Button onClick={handleAddCertification}>
                    {loading ? <>
                        <div className='d-flex'>
                            <PuffLoader
                                size={25}
                                color="#ffffff"
                            /> <span className='pl-2'>  </span>
                        </div>
                    </> :
                        // 'Save'
                        'Guardar'

                    }
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

function MyVerticallyCenteredModalEditCertification(props) {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const editId = props.editid;
    const delId = props.delid;
    const [loadingdel, setLoadingDel] = useState(false);
    const [certificate_name, setCertificateName] = useState('');
    const [issued_by, setIssuedBy] = useState('');
    const [issued_on_month, setIssuedOnMonth] = useState('');
    const [issued_on_year, setIssuedOnYear] = useState('');
    // const [expiration_month, setExpirationMonth] = useState('');
    // const [expiration_year, setExpirationYear] = useState('');
    const [credential_id, setCredentialId] = useState('');
    const [credential_url, setCredentialUrl] = useState('');
    const dispatch = useDispatch();

    const isValidUrl = (url) => {
        const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(url);
    }

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1920 }, (_, i) => currentYear - i);
    const years2 = Array.from({ length: (currentYear + 20) - 1920 }, (_, i) => (currentYear + 20) - i);
    const allcertificates = props?.certificatedata;
    const certificate = allcertificates?.filter((certificate) => certificate._id === editId)[0];

    useEffect(() => {
        if (certificate) {
            setCertificateName(certificate?.certificate_name);
            setIssuedBy(certificate?.issued_by);
            setIssuedOnMonth(certificate?.issue_month);
            setIssuedOnYear(certificate?.issue_year);
            // setExpirationMonth(certificate?.expiration_month);
            // setExpirationYear(certificate?.expiration_year);
            setCredentialId(certificate?.credential_id);
            setCredentialUrl(certificate?.credential_url);
        }
    }, [certificate])

    const handleEditCertification = async (e) => {
        e.preventDefault();

        if (!certificate_name || !issued_by || !issued_on_month || !issued_on_year) {
            return toast.error('Please fill mandatory fields');
        }
        // if (parseInt(issued_on_year) > parseInt(expiration_year)) {
        //     return toast.error('Expiration year should be less than issued year')
        // }
        // if(parseInt(issued_on_year) === parseInt(expiration_year) || ){

        if (credential_url && !isValidUrl(credential_url)) {
            return toast.error('Please enter a valid URL');
        }

        setLoading(true);

        const certificateData = {
            certificate_name: certificate_name,
            issued_by: issued_by,
            issue_month: issued_on_month,
            issue_year: issued_on_year,
            // expiration_month: expiration_month,
            // expiration_year: expiration_year,
            credential_id: credential_id,
            credential_url: credential_url,
        }

        const response = await dispatch(updateCertificateAction(editId, certificateData))
        if (response.success) {
            const respo2 = await dispatch(getCertificatesAction(id))
            if (respo2) {
                props.onHide();
            } else {
                toast.info('Please referesh the page to see changes');
            }
        }

        setLoading(false);
    }

    const handledeletecertificates = async (e) => {
        e.preventDefault();
        setLoadingDel(true);
        const response = await dispatch(deleteCertificateAction(delId))
        if (response.success) {
            const respo2 = await dispatch(getCertificatesAction(id))
            if (respo2) {
                props.onHide();
            } else {
                toast.info('Please referesh the page to see changes');
            }
        }
        setLoadingDel(false);
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={props.onHide}
        >
            <Modal.Header
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
                closeButton
            >
                <Modal.Title id="contained-modal-title-vcenter"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',

                    }}
                >
                    <PiCertificateDuotone size={'25'} />

                    <h5 className='mt-2'>
                        {/* Add Liscence and certification */}
                        Añade tus licencias o certificaciones
                    </h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <h6><b> Wow the recruiters </b></h6> */}
                {/* <p> */}
                {/* Imagine that you're meeting the CEO of your dream company. What should you say to amaze them? */}
                {/* </p> */}
                <form>
                    <div className="form-group">
                        <label htmlFor="certificate_name">
                            {/* Certificate Name */}
                            Nombre del certificado
                            <small className='text-danger'>*</small>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={certificate_name}
                            onChange={(e) => setCertificateName(e.target.value)}
                            id="certificate_name"
                            // placeholder="Enter Certificate Name"
                            placeholder='Escribe el nombre de tu título'
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="issued_by">
                            {/* Issued By */}
                            Emitido por
                            <small className='text-danger'>*</small>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={issued_by}
                            onChange={(e) => setIssuedBy(e.target.value)}
                            id="issued_by"
                            // placeholder="Enter Issuing organization name"
                            placeholder=' Escribe el nombre de la organización'
                        />
                    </div>
                    <div>
                        <label htmlFor="issue_on">
                            {/* Issued on */}
                            Emitido el
                            <small className='text-danger'>*</small>
                        </label>
                        <div className="form-group row">
                            <div className='form-group col-md-6'>
                                <select
                                    className='form-control'
                                    value={issued_on_month}
                                    onChange={(e) => setIssuedOnMonth(e.target.value)}
                                >
                                    <option value="">
                                        {/* Month */}
                                        Mes
                                    </option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <select
                                    className='form-control'
                                    value={issued_on_year}
                                    onChange={(e) => setIssuedOnYear(e.target.value)}
                                >
                                    <option value="">
                                        {/* Year */}
                                        Año
                                    </option>
                                    {years.map((year) =>
                                        <option key={year} value={year}>{year}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <label htmlFor="expired_on">
                            Expired on
                        </label>
                        <div className='row'>
                            <div className="form-group col-md-6">
                                <select
                                    className='form-control'
                                    value={expiration_month}
                                    onChange={(e) => setExpirationMonth(e.target.value)}
                                >
                                    <option value="">
                                        Mes
                                    </option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <select
                                    className='form-control'
                                    value={expiration_year}
                                    onChange={(e) => setExpirationYear(e.target.value)}
                                >
                                    <option value="">
                                        Año
                                    </option>
                                    {years2.map((year) =>
                                        <option key={year} value={year}>{year}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="credential_id">
                            {/* Credential ID */}
                            Número de registro de título
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="credential_id"
                            value={credential_id}
                            onChange={(e) => setCredentialId(e.target.value)}
                            // placeholder="Enter Credential ID"
                            placeholder='Escribe el número de registro de tu título'
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="credential_url">
                            {/* Credential URL */}
                            URL del Título
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={credential_url}
                            id="credential_url"
                            onChange={(e) => setCredentialUrl(e.target.value)}
                            // placeholder="Enter Credential URL"
                            placeholder='Escribe la URL de tu título'
                        />
                    </div>
                </form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(event) => { event.stopPropagation(); props.onHide(); }} className='btn btn-secondary'>
                    {/* Close */}
                    Cerrar
                </Button>
                <Button onClick={handledeletecertificates} className='btn btn-danger' >
                    {loadingdel ?
                        <>
                            <div className='d-flex'>
                                <PuffLoader
                                    size={25}
                                    color="#ffffff"
                                />
                                <span className='pl-2'> </span>
                            </div>
                        </> :
                        // 'Remove Certificate'
                        'Eliminar certificado'
                    }
                </Button>
                <Button onClick={handleEditCertification}>
                    {loading ? <>
                        <div className='d-flex'>
                            <PuffLoader
                                size={25}
                                color="#ffffff"
                            /> <span className='pl-2'> </span>
                        </div>
                    </> :
                        // 'Save'  
                        'Guardar'
                    }
                </Button>
            </Modal.Footer>
        </Modal>
    );
}


const UserCertifications = () => {
    const { id } = useParams();
    const [modalShow, setModalShow] = useState(false);
    const [editId, setEditId] = useState(null);
    const [delId, setDelId] = useState(null);
    const [modalShowEdit, setModalShowEdit] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCertificatesAction(id))
    }, [])

    const allcertificates = useSelector((state) => state.getCertificatesReducer);
    const allcertificatesData = allcertificates?.data?.result;
    console.log(allcertificatesData);



    return (
        <div id='liscencescroll'>
            <ToastContainer />
            {(allcertificatesData?.length === 0 || allcertificatesData === undefined) ?
                <>
                    <div className={` ${PrCss.addSections}`} onClick={() => setModalShow(true)} style={{ cursor: 'pointer' }}>
                        <div className="card w-100">
                            <div className="card-body text-center">
                                <i className='fa-solid fa-plus'></i>
                                <p className='card-text'>
                                    {/* Add Liscence or Certifications */}
                                    Añade tus licencias o certificaciones
                                </p>
                            </div>
                        </div>
                    </div>
                </> :
                <>
                    <div className="card-body mt-3 mb-0 pb-0">
                        <div className='row justify-content-between ml-2 mr-2'>
                            <h5 className="card-title">
                                {/* Licenses & certifications */}
                                Licencias y certificaciones
                            </h5>
                            <div style={{ cursor: 'pointer' }} onClick={() => setModalShow(true)} >
                                <CiSquarePlus size={'35'} />
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            width: '50vw',
                            boxShadow: '14px 10px 20px 3px #d3beae',
                            borderRadius: '25px 25px 25px 25px',
                        }}
                    >
                        {allcertificatesData?.map((certificate) => {
                            return (
                                <div class="card"
                                >
                                    <div className="card-body">
                                        <div className="card-header mt-1"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}
                                        >
                                            {certificate.certificate_name}
                                            <div style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setModalShowEdit(true);
                                                    setDelId(certificate._id);
                                                    setEditId(certificate._id);
                                                }}>
                                                <RxPencil1 style={{ marginLeft: '10px' }} />
                                            </div>
                                        </div>
                                        <div className='ml-2'>
                                            <div className="card-text mt-1">{certificate.issued_by} </div>
                                            {certificate.credential_id ?
                                                <>
                                                    <div className="card-text mt-1">
                                                        {/* Credential ID :  */}
                                                        Número de registro de título : &nbsp;
                                                        {certificate.credential_id}
                                                    </div>
                                                </>
                                                : <></>
                                            }
                                            <div className="card-text mt-1">
                                                <small className='text-muted'>
                                                    {/* Issued  */}
                                                    Emitido 
                                                    · &nbsp;
                                                    {certificate.issue_month} {certificate.issue_year}
                                                    {/* {certificate.expiration_month ?
                                                        <> · Expires {certificate.expiration_month}
                                                            {certificate.expiration_year}
                                                        </> 
                                                        */}
                                                </small>
                                            </div>
                                            {/* <div className="card-text mt-1">Credential ID 293f3085-8c81-409e-9a91-a2b5a95a17f0</div> */}

                                            {certificate.credential_url ?
                                                <>
                                                    <a href={`${certificate.credential_url}`}
                                                        target='_blank'
                                                        style={{ textDecoration: 'none' }}
                                                    >
                                                        <button className='btn mt-3' style={{
                                                            backgroundColor: '#e4b49d',
                                                            marginRight: '1vw',
                                                            display: 'flex'
                                                        }}>
                                                            {/* Show credential */}
                                                            Mostrar credencial
                                                            <div className='ml-2 mt-1'>
                                                                <FaExternalLinkAlt />
                                                            </div>
                                                        </button>
                                                    </a>
                                                </>
                                                : <></>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </>
            }

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />


            <MyVerticallyCenteredModalEditCertification
                show={modalShowEdit}
                editid={editId}
                delid={delId}
                onHide={() => setModalShowEdit(false)}
                certificatedata={allcertificatesData}
            />


        </div>
    )
}

export default UserCertifications
