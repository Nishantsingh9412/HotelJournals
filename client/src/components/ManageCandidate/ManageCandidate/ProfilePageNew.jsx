import React from 'react';
import { BiPhone } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { IoLocationOutline } from "react-icons/io5";
import { RxPencil1 } from "react-icons/rx";
import { LiaBirthdayCakeSolid } from "react-icons/lia";


const ProfilePageNew = () => {
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        profilePicture: 'path_to_profile_picture.jpg',
        skills: ['JavaScript', 'React', 'Node.js'],
        experience: [
            {
                jobTitle: 'Software Developer',
                company: 'XYZ Company',
                startDate: 'January 2020',
                endDate: 'Present',
                description: 'Developed web applications using JavaScript and React.'
            }
        ],
        education: [
            {
                degree: 'Bachelor of Science',
                field: 'Computer Science',
                school: 'XYZ University',
                startYear: '2016',
                endYear: '2020'
            }
        ]
    };

    return (
        <div className='container mt-4'>
            {/* Basic  Section */}
            <div class="card" style=
                {{
                    boxShadow: '14px 10px 20px 3px #d3beae',
                    borderRadius: '25px 25px 25px 25px'
                }}
            >

                <div class="card-body d-flex">
                    <div className='col-md-2'>
                        <img src="https://picsum.photos/200" className='img-responsive rounded-circle mt-4' alt="userpic" />
                    </div>
                    <div className='col-md-10'>
                        <div>
                            <h2 class="card-title" >Nishant Singh</h2>
                            <p class="card-text p-0 m-0">B.Tech / BE </p>
                            <p class="card-text p-0 m-0">Software Developer</p>
                            <hr style={{ width: '100%' }} />
                        </div>
                        <div className='col'>
                            <div className='row justify-content-left'>
                                <div className='col-auto'>
                                    <div className='row'>
                                        <p class="card-text mr-2 mt-1">
                                            <LiaBirthdayCakeSolid />
                                        </p>
                                        <p class="card-text p-0 m-0">
                                            29/07/2001
                                        </p>
                                    </div>

                                    <div className='row'>
                                        <p class="card-text mr-2 mt-1">
                                            <CiLocationOn />
                                        </p>
                                        <p class="card-text p-0 m-0">
                                            Kanpur
                                        </p>
                                    </div>
                                </div>
                                <div className='col-auto ml-5'>
                                    <div className='row'>
                                        <p class="card-text mr-2 mt-1">
                                            <BiPhone />
                                        </p>
                                        <p class="card-text p-0 m-0">
                                            8957899736
                                        </p>
                                    </div>

                                    <div className='row'>
                                        <p class="card-text mr-2 mt-1">
                                            <IoLocationOutline />
                                        </p>
                                        <p class="card-text p-0 m-0">
                                            nishantsingh9412ns@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {/* Left Side */}
                {/* Quick Links  */}
                <div className='mt-3 col-md-4'

                >
                    <div class="card" style={{ width: '18rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">Quick Links</h5>
                            {/* All Links */}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <button onClick={() => console.log('Profile')} className="card-link">Profile</button>
                                </li>
                                <li className="list-group-item">
                                    <button onClick={() => console.log('Experience')} className="card-link">
                                        Experience
                                    </button>
                                </li>
                                <li className="list-group-item">
                                    <button onClick={() => console.log('Education')} className="card-link">
                                        Education
                                    </button>
                                </li>
                                <li className="list-group-item">
                                    <button className="card-link" onClick={() => console.log('Skills')} >
                                        Skills
                                    </button>
                                </li>
                                <li className="list-group-item">
                                    <button onClick={() => console.log('Projects')} className="card-link">
                                        Projects
                                    </button>
                                </li>

                                <li className="list-group-item">
                                    <button onClick={() => console.log('Liscence and Certifications')} className="card-link">
                                        Liscence & Certifications
                                    </button>
                                </li>


                                <li className="list-group-item">
                                    <button onClick={() => console.log('Languages')} className="card-link">
                                        Languages
                                    </button>
                                </li>


                                <li className="list-group-item">
                                    <button onClick={() => console.log('Additional Information')} className="card-link">
                                        Additional Information
                                    </button>
                                </li>


                                <li className="list-group-item">
                                    <button onClick={() => console.log('Resume')} className="card-link">
                                        Resume
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                {/* All Details */}
                <div className='mt-3 col-md-8'>
                    <div class="card">
                        <div class="card-body border-0"
                            style=
                            {{
                                boxShadow: '14px 10px 20px 3px #d3beae',
                                borderRadius: '25px 25px 25px 25px'
                            }}
                        >
                            <h5 class="card-title">Education</h5>
                            {/* Repeater */}
                            <div className='mt-1'>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    Axis institute of technology and management
                                    <RxPencil1 style={{ marginLeft: '10px' }} />
                                </div>
                                <p className='text-muted p-0 m-0'> Graduating in 2024, Full Time </p>
                            </div>
                            <div className='mt-1'>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    Allen House
                                    <RxPencil1 style={{ marginLeft: '10px' }} />
                                </div>
                                <p className='text-muted p-0 m-0'> Graduating in 2024, Full Time </p>
                            </div>


                        </div>
                    </div>
                    
                    
                    
                </div>


                
                
                
            </div>
        </div>
    );
};

export default ProfilePageNew;