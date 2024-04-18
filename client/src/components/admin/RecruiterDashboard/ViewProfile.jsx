import { React, useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";

import Profile from '../../Recruiters_profile/ImageCropperForRecProfile/Profile.jsx';
import styles from "./ViewProfile.module.css";

const ViewProfile = ({ data }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (data) {
            setLoading(false);
        }
    }, [data]);

    return (
        <>
            {loading ? (

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}>
                    <PuffLoader
                        color="red"
                        size={70}
                    />
                </div>

            ) : (

                <div className="container">
                    <div className={`mt-4`}>
                        <div className="row">
                            <div className={`${styles.profileNav} col-md-3`}>
                                <div className="panel">
                                    <div className={`${styles.userHeading} round`}>
                                        <img
                                            className={`${styles.recProfileImg}`}
                                            src={data?.company_logo}
                                            alt="Company Logo"
                                        />
                                        <h1 className="mt-3">{data?.created_by?.fname}</h1>
                                        <p className="mt-2 text-white" style={{ fontSize: '1rem' }}> {data?.created_by?.email}</p>
                                    </div>
                                    {/* <ul className="nav nav-pills flex-column flex-sm-row">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="#">
                                                <i className="fa fa-user" /> Profile
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <i className="fa fa-calendar" /> Recent
                                                Activity{" "}
                                                <span className="label label-warning r-activity">
                                                    9
                                                </span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                {" "}
                                                <i className="fa fa-edit" /> Edit profile
                                            </a>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                            <div className={`${styles.profileInfo} col-md-9`}>
                                {/* <div className="panel">
                        <form>
                            <textarea
                                placeholder="Whats in your mind today?"
                                rows={2}
                                className={`${styles.pTextArea} form-control input-lg`}
                                defaultValue={""}
                            />
                        </form>
                        <footer className="panel-footer">
                            <button className="btn btn-warning pull-right">
                                Post
                            </button>
                            <ul className="nav nav-pills">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-map-marker" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-camera" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className=" fa fa-film" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-microphone" />
                                    </a>
                                </li>
                            </ul>
                        </footer>
                    </div> */}
                                <div className="panel">
                                    {
                                        data.CompanysTagline && (
                                            <div className={styles.bioGraphHeading}>
                                                {`“${data.CompanysTagline}”`}
                                            </div>
                                        )
                                    }

                                    <div className="panel-body bio-graph-info">
                                        {/* <div> */}
                                        {/* <h1>Bio Graph</h1> */}
                                        <div className="row">
                                            <div className="col-12 col-sm-6">
                                                <h4 className="mb-3 mt-2 card-header">
                                                    {/* Personal Information */}
                                                    Información Personal
                                                </h4>
                                                <div className="ml-2">
                                                    <p className="mb-1"><strong>
                                                        {/* First Name: */}
                                                        Nombre :
                                                    </strong> {data?.created_by?.fname}</p>
                                                    <p className="mb-1"><strong>
                                                        {/* Last Name: */}
                                                        Apellido :
                                                    </strong>
                                                        &nbsp;
                                                        {data?.created_by?.lname}
                                                    </p>
                                                    <p className="mb-1">
                                                        <strong>
                                                            {/* Mobile: */}
                                                            Número de Teléfono :
                                                        </strong> {data?.created_by?.country_code} {data?.created_by?.phone}</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <h4 className="mb-2 mt-2 card-header">
                                                    {/* Company Information */}
                                                    Información Empresarial 
                                                </h4>
                                                <div className="d-flex justify-content-start ml-2">
                                                    {
                                                        data?.companyWebsite && (
                                                            <a href={data?.companyWebsite} target="_blank" rel="noopener noreferrer">
                                                                <i className="fas fa-globe mr-3"></i>
                                                            </a>
                                                        )
                                                    }

                                                    {
                                                        data?.twitter && (
                                                            <a href={data?.twitter} target="_blank" rel="noopener noreferrer">
                                                                <i className="fab fa-twitter mr-3"></i>
                                                            </a>
                                                        )
                                                    }

                                                    {
                                                        data?.linkedIn && (
                                                            <a href={data?.linkedIn} target="_blank" rel="noopener noreferrer">
                                                                <i className="fab fa-linkedin-in"></i>
                                                            </a>
                                                        )
                                                    }
                                                </div>
                                                <div className="ml-2">
                                                    <p className="mb-1 mt-3"><strong>
                                                        {/* Company */}
                                                        Empresa: 
                                                         </strong> {data?.companyName}  </p>
                                                    <p className="mb-1"><strong>
                                                        {/* Designation  */}
                                                        Puesto: 
                                                        </strong> {data?.Designation}  </p>
                                                    <p className="mb-1" ><strong>
                                                        {/* Head Quarters  */}
                                                        Sede central: 
                                                        </strong>: {data?.HeadQuarters}</p>
                                                </div>

                                                {/* <p><span>Mobile </span>: (12) 03 4567890</p> */}
                                                {/* <p><span>Phone </span>: 88 (02) 123456</p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.bioGraphHeading2}>
                                        {data.CompanyDescription}
                                    </div>

                                </div>
                                <div>
                                    {/* <div className="row">
                                <div className="col-md-6">
                                    <div className="panel">
                                        <div className="panel-body">
                                            <div className="bio-chart">
                                                <div
                                                    style={{
                                                        display: "inline",
                                                        width: 100,
                                                        height: 100
                                                    }}
                                                >
                                                    <canvas
                                                        width={100}
                                                        height="100px"
                                                    />
                                                    <input
                                                        className="knob"
                                                        data-width={100}
                                                        data-height={100}
                                                        data-displayprevious="true"
                                                        data-thickness=".2"
                                                        defaultValue={35}
                                                        data-fgcolor="#e06b7d"
                                                        data-bgcolor="#e8e8e8"
                                                        style={{
                                                            width: 54,
                                                            height: 33,
                                                            position: "absolute",
                                                            verticalAlign:
                                                                "middle",
                                                            marginTop: 33,
                                                            marginLeft: "-77px",
                                                            border: 0,
                                                            fontWeight: "bold",
                                                            fontStyle: "normal",
                                                            fontVariant: "normal",
                                                            fontStretch: "normal",
                                                            fontSize: 20,
                                                            lineHeight: "normal",
                                                            fontFamily: "Arial",
                                                            textAlign: "center",
                                                            color:
                                                                "rgb(224, 107, 125)",
                                                            padding: 0,
                                                            WebkitAppearance:
                                                                "none",
                                                            background: "none"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="bio-desk">
                                                <h4 className="red">
                                                    Envato Website
                                                </h4>
                                                <p>Started : 15 July</p>
                                                <p>Deadline : 15 August</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="panel">
                                        <div className="panel-body">
                                            <div className="bio-chart">
                                                <div
                                                    style={{
                                                        display: "inline",
                                                        width: 100,
                                                        height: 100
                                                    }}
                                                >

                                                    <canvas
                                                        width={100}
                                                        height="100px"
                                                    />
                                                    <input
                                                        className="knob"
                                                        data-width={100}
                                                        data-height={100}
                                                        data-displayprevious="true"
                                                        data-thickness=".2"
                                                        defaultValue={63}
                                                        data-fgcolor="#4CC5CD"
                                                        data-bgcolor="#e8e8e8"
                                                        style={{
                                                            width: 54,
                                                            height: 33,
                                                            position: "absolute",
                                                            verticalAlign:
                                                                "middle",
                                                            marginTop: 33,
                                                            marginLeft: "-77px",
                                                            border: 0,
                                                            fontWeight: "bold",
                                                            fontStyle: "normal",
                                                            fontVariant: "normal",
                                                            fontStretch: "normal",
                                                            fontSize: 20,
                                                            lineHeight: "normal",
                                                            fontFamily: "Arial",
                                                            textAlign: "center",
                                                            color:
                                                                "rgb(76, 197, 205)",
                                                            padding: 0,
                                                            WebkitAppearance:
                                                                "none",
                                                            background: "none"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="bio-desk">
                                                <h4 className="terques">
                                                    ThemeForest CMS{" "}
                                                </h4>
                                                <p>Started : 15 July</p>
                                                <p>Deadline : 15 August</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="panel">
                                        <div className="panel-body">
                                            <div className="bio-chart">
                                                <div
                                                    style={{
                                                        display: "inline",
                                                        width: 100,
                                                        height: 100
                                                    }}
                                                >
                                                    <canvas
                                                        width={100}
                                                        height="100px"
                                                    />
                                                    <input
                                                        className="knob"
                                                        data-width={100}
                                                        data-height={100}
                                                        data-displayprevious="true"
                                                        data-thickness=".2"
                                                        defaultValue={75}
                                                        data-fgcolor="#96be4b"
                                                        data-bgcolor="#e8e8e8"
                                                        style={{
                                                            width: 54,
                                                            height: 33,
                                                            position: "absolute",
                                                            verticalAlign:
                                                                "middle",
                                                            marginTop: 33,
                                                            marginLeft: "-77px",
                                                            border: 0,
                                                            fontWeight: "bold",
                                                            fontStyle: "normal",
                                                            fontVariant: "normal",
                                                            fontStretch: "normal",
                                                            fontSize: 20,
                                                            lineHeight: "normal",
                                                            fontFamily: "Arial",
                                                            textAlign: "center",
                                                            color:
                                                                "rgb(150, 190, 75)",
                                                            padding: 0,
                                                            WebkitAppearance:
                                                                "none",
                                                            background: "none"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="bio-desk">
                                                <h4 className="green">
                                                    VectorLab Portfolio
                                                </h4>
                                                <p>Started : 15 July</p>
                                                <p>Deadline : 15 August</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="panel">
                                        <div className="panel-body">
                                            <div className="bio-chart">
                                                <div
                                                    style={{
                                                        display: "inline",
                                                        width: 100,
                                                        height: 100
                                                    }}
                                                >
                                                    <canvas
                                                        width={100}
                                                        height="100px"
                                                    />
                                                    <input
                                                        className="knob"
                                                        data-width={100}
                                                        data-height={100}
                                                        data-displayprevious="true"
                                                        data-thickness=".2"
                                                        defaultValue={50}
                                                        data-fgcolor="#cba4db"
                                                        data-bgcolor="#e8e8e8"
                                                        style={{
                                                            width: 54,
                                                            height: 33,
                                                            position: "absolute",
                                                            verticalAlign:
                                                                "middle",
                                                            marginTop: 33,
                                                            marginLeft: "-77px",
                                                            border: 0,
                                                            fontWeight: "bold",
                                                            fontStyle: "normal",
                                                            fontVariant: "normal",
                                                            fontStretch: "normal",
                                                            fontSize: 20,
                                                            lineHeight: "normal",
                                                            fontFamily: "Arial",
                                                            textAlign: "center",
                                                            color:
                                                                "rgb(203, 164, 219)",
                                                            padding: 0,
                                                            WebkitAppearance:
                                                                "none",
                                                            background: "none"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="bio-desk">
                                                <h4 className="purple">
                                                    Adobe Muse Template
                                                </h4>
                                                <p>Started : 15 July</p>
                                                <p>Deadline : 15 August</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )}
        </>
    );
};

export default ViewProfile;

