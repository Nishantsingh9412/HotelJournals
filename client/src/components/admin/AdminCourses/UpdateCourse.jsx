import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from "react-router-dom";

import languages from './languages'
import { useDispatch, useSelector } from 'react-redux';
import { GetCourseSingle, UpdateCourseAction } from '../../../redux/actions/courseAdmin';

const UpdateCourse = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        dispatch(GetCourseSingle(id))
    }, [dispatch]);


    const isValidURL = (url) => {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    }

    const [courseTitle, setCourseTitle] = useState('');
    const [courseDesc, setCourseDesc] = useState('');
    const [courseLanguage, setCourseLanguage] = useState([]);
    const [courseLink, setCourseLink] = useState('');
    const [courseCategory, setCourseCategory] = useState('');
    const [courseType, setCourseType] = useState('');
    const [courseFormat, setCourseFormat] = useState('');
    const [isFree, setIsFree] = useState(true);
    const [coursePrice, setCoursePrice] = useState('');
    const [courseDurationValue, setCourseDurationValue] = useState('');
    const [courseDurationUnit, setCourseDurationUnit] = useState('');
    const [courseDuration, setCourseDuration] = useState('');
    const [courseCompany, setCourseCompany] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [picThumb, setPicThumb] = useState('');
    const [picLogo, setPicLogo] = useState('');
    const [loading, setLoading] = useState(false);
    // To be deleted
    const storedProfile = JSON.parse(localStorage.getItem('Profile'));
    const storedProfileUserID = storedProfile?.result?._id;
    // To be deleted end 
    const singleCourse = useSelector((state) => state.GetCourseSingleReducer)
    // console.log('CourseDuration isiiiiiii : ',singleCourse?.result?.duration.split(' ')[1],singleCourse?.result?.duration.split(' ')[0]);
    console.log(` UPDATECOURSE.JSX`, singleCourse);
    const [hasUserChangedValue, setHasUserChangedValue] = useState(false);








    useEffect(() => {
        if (singleCourse?.result) {
            setCourseTitle(singleCourse?.result?.title);
            setCourseDesc(singleCourse?.result?.description);
            // setCourseLanguage(singleCourse?.result?.languages.map(lang => lang.value));
            setCourseLink(singleCourse?.result?.course_link);
            setCourseCategory(singleCourse?.result?.course_category);
            setCourseType(singleCourse?.result?.course_type);
            setCourseFormat(singleCourse?.result?.format);
            setIsFree(singleCourse?.result?.isFree);
            setCoursePrice(singleCourse?.result?.price);
            if (singleCourse?.result?.duration) {
                const [value, unit] = singleCourse.result.duration.split(' ');

                if (value) {
                    setCourseDurationValue(parseFloat(value));
                }

                if (unit) {
                    setCourseDurationUnit(unit);
                }
            }
            setDifficulty(singleCourse?.result?.difficulty);
            setCourseCompany(singleCourse?.result?.company_name);
            // setPicThumb(singleCourse?.result?.banner_image);
            // setPicLogo(singleCourse?.result?.brand_image);

        }
    }, [singleCourse])



    // useEffect(() => {
    //     if (!hasUserChangedValue && singleCourse?.result?.duration) {
    //         const [value, unit] = singleCourse.result.duration.split(' ');

    //         if (value) {
    //             setCourseDurationValue(parseInt(value));
    //         }

    //         if (unit) {
    //             setCourseDurationUnit(unit);
    //         }
    //     }
    // }, [singleCourse]);


    useEffect(() => {
        setCourseDuration(courseDurationValue + " " + courseDurationUnit);
    },[courseDurationValue, courseDurationUnit])


    const postThumbnail = (pics) => {
        setLoading(true);
        if (pics === undefined) {
            toast.error("This didn't work.")
            return;
        }
        if (pics.type !== 'image/jpeg' && pics.type !== 'image/png') {
            toast.error('Invalid image format');
            return;
        }
        const data = new FormData();
        data.append('file', pics);
        data.append('upload_preset', 'Hotel_Journals_app');
        data.append('cloud_name', 'dwahql1jy');
        fetch('https://api.cloudinary.com/v1_1/dwahql1jy/image/upload', {
            method: 'post',
            body: data
        }).then(res => res.json()).then(data => {
            setPicThumb(data.url.toString());
            console.log(data);
            setLoading(false);
        }).catch(err => {
            console.log(err);
            setLoading(false);
        })
    }

    const postLogo = (pics) => {
        setLoading(true);
        if (pics === undefined) {
            toast.error("This didn't work.")
            return;
        }
        if (pics.type !== 'image/jpeg' && pics.type !== 'image/png') {
            toast.error('Invalid image format');
            return;
        }
        const data = new FormData();
        data.append('file', pics);
        data.append('upload_preset', 'Hotel_Journals_app');
        data.append('cloud_name', 'dwahql1jy');
        fetch('https://api.cloudinary.com/v1_1/dwahql1jy/image/upload', {
            method: 'post',
            body: data
        }).then(res => res.json()).then(data => {
            setPicLogo(data.url.toString());
            console.log(data);
            setLoading(false);
        }).catch(err => {
            console.log(err);
            setLoading(false);
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(courseTitle, courseDesc, courseLanguage, courseLink, courseFormat, isFree,
            // coursePrice, courseDuration, courseCompany,  picThumb, picLogo);
        if (!courseTitle || !difficulty || !courseDesc || courseLanguage.length === 0 || !courseLink || !courseFormat || isFree === null ||  (isFree === false && coursePrice === "")
            || !courseDurationValue || !courseDurationUnit || !courseCompany || !courseCategory || !courseType ||  !picThumb || !picLogo ) {
            return toast.error('Please fill all fields');
        }
        if (courseDesc.length < 200) {
            return toast.error('Course Description must be more than 200 characters');
        }
        if(isFree){
            setCoursePrice(0);
        }if(!isValidURL(courseLink)){
            return toast.error(' Enter a Valid Course Link');
        }

        const courseData = {
            title: courseTitle,
            description: courseDesc,
            company_name: courseCompany,
            course_category: courseCategory,
            course_type: courseType,
            price: coursePrice,
            isFree: isFree,
            difficulty: difficulty,
            course_link: courseLink,
            format: courseFormat,
            languages: courseLanguage,
            duration: courseDuration,
            banner_image: picThumb,
            brand_image: picLogo,
            // created_by:storedProfileUserID,
        };

        const response = dispatch(UpdateCourseAction(id, courseData));
        console.log("This is response.path  " + response.path);
        toast.success('Course Updated Successfully');
    }





    return (
        <div className='container mt-4 mb-3'>
            <h1> Update Course hain ji </h1>
            <Toaster />
            <form >
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <div>
                            <label htmlFor="course_title"> Course Title</label>
                            <input type="text" class="form-control" value={courseTitle} placeholder="Intro to methodolgy" onChange={(e) => setCourseTitle(e.target.value)} />
                        </div>

                        <div className='mt-3'>
                            <label htmlFor="difficulty"> Course Difficulty Level </label>
                            <div className="col pl-0">
                                <select id="difficulty" value={difficulty} className="form-control" onChange={(e) => setDifficulty(e.target.value)}>
                                    <option value="">Select</option>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Advanced">Advanced</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* Hello Motto */}
                    <div class="form-group col-md-6">
                        <label htmlFor="course_desc"> Course Description (Minimum 200 Words) </label>
                        <textarea type="text" rows="5" value={courseDesc} class="form-control" placeholder="Course Description" onChange={(e) => setCourseDesc(e.target.value)} > </textarea>
                    </div>
                </div>
                <div className='form-row'>
                    <div class="form-group col-md-6">
                        <label htmlFor="inputLanguages"> Course Language </label>
                        <Select options={languages} isMulti onChange={(selectedOptions) => setCourseLanguage(selectedOptions.map(option => option.value))} />
                    </div>


                    <div class="form-group col-md-6">
                        <label htmlFor="course_link">Course Link</label>
                        <input type="url" class="form-control" value={courseLink} placeholder="https://www.example.com/course/nanocourse-111" onChange={(e) => setCourseLink(e.target.value)} />
                    </div>
                </div>


                <div className="form-group row">
                    <div className='form-group col-md-6'>
                        <label htmlFor="format" className="form-label">Format</label>
                        <div className="col pl-0">
                            <select id="format" className="form-control" value={courseFormat} onChange={(e) => setCourseFormat(e.target.value)}>
                                <option value="">Select</option>
                                <option value="Online">Online</option>
                                <option value="Offline">Offline</option>
                                <option value="Both">Both</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-group col-md-6'>
                        <label htmlFor="course_option"> Is this course free <small className='text-danger'> * </small> </label>
                        <div className='col-md-2'>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="freeYes" name="isFree" defaultChecked className="custom-control-input" onChange={() => {setIsFree(true) ; setCoursePrice(''); } } />
                                <label class="custom-control-label" for="freeYes">Yes</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="freeNo" name="isFree"  className="custom-control-input" onChange={() => setIsFree(false)} />
                                <label class="custom-control-label" for="freeNo">No</label>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            {isFree ? (
                                <>
                                    {/* True Case */}
                                </>) : (<>
                                    {/* False case */}
                                    <div className='form-group mt-3'>
                                        <label htmlFor="price"> Course Price </label>
                                        <input type="text" className='form-control' placeholder='$105.45' onChange={(e) => setCoursePrice(e.target.value)} />
                                    </div> </>)
                            }
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label htmlFor="inputState">Course Duration Value</label>
                        <input type='number' value={courseDurationValue} className='form-control' placeholder='4.5' onChange={(e) => { setCourseDurationValue(e.target.value) }} />
                    </div>

                    <div class="form-group col-md-2">
                        <label htmlFor="inputState"> Duration  Unit </label>
                        <select className='form-control' value={courseDurationUnit} onChange={(e) => setCourseDurationUnit(e.target.value)}>
                            <option value=""> Select </option>
                            <option value="Minutes"> Minutes </option>
                            <option value="Hours">Hours</option>
                            <option value="Days">Days</option>
                            <option value="Weeks">Weeks</option>
                            <option value="Months">Months</option>
                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="company_name">Course provider company Name</label>
                        <input type="text" class="form-control" value={courseCompany} placeholder="Example Solutions pvt. ltd." onChange={(e) => setCourseCompany(e.target.value)} />
                    </div>

                </div>

                <div className='form-row'>
                    <div className='form-group col-md-6'>
                        <label htmlFor="course category" > Course Category </label>
                        <select className='form-control' value={courseCategory} onChange={(e) => setCourseCategory(e.target.value)}>
                            <option value=""> Select Course Category </option>
                            <option value="IT and Software"> IT & Software </option>
                            <option value="Business"> Business </option>
                            <option value="Development and Computing"> Development & Computing </option>
                            <option value="Finance and Accounting"> Finance & Accounting </option>
                            <option value="Office Productivity"> Office Productivity </option>
                            <option value="Personal Development"> Personal Development </option>
                            <option value="Design"> Design </option>
                            <option value="Marketing"> Marketing </option>
                            <option value="Lifestyle"> Lifestyle </option>
                            <option value="Health and Safety"> Health & Safety </option>
                            <option value="Human Resources"> Human Resources </option>
                            <option value="Leadership and Management"> Leadership & Management </option>
                            <option value="Legal"> Legal </option>
                            <option value="Photography and Video"> Photography </option>
                            <option value="Health and Fitness"> Health & Fitness </option>
                            <option value="Music"> Music </option>
                            <option value="Teacher and Academics"> Teacher & Academics </option>
                            <option value="Language"> Language </option>
                            <option value="Test Prep"> Test Preparation </option>
                        </select>

                    </div>

                    <div className='form-group col-md-6'>
                        <label htmlFor='course_type'  > Course Type </label>
                        <select className='form-control' value={courseType} onChange={(e) => setCourseType(e.target.value)}>
                            <option value=""> Select </option>
                            <option value="Bachelors"> Bachelors </option>
                            <option value="Masters"> Masters </option>
                            <option value="Diploma"> Diploma </option>
                            <option value="Professional"> Professional </option>
                            <option value="Short Course"> Short Course </option>
                            <option value="Bootcamp"> Bootcamp </option>
                        </select>
                    </div>
                </div>

                <div className='form-row'>
                    <div class="form-group col-md-6">
                        <label htmlFor="inputZip">Course Thumbnail </label>
                        <input type="file" class="form-control" onChange={(e) => postThumbnail(e.target.files[0])} />
                    </div>

                    <div class="form-group col-md-6">
                        <label htmlFor="inputZip">Company Logo</label>
                        <input type="file" class="form-control" onChange={(e) => postLogo(e.target.files[0])} />
                    </div>
                </div>


                <button type="submit" class="mt-3 btn btn-success w-100" onClick={handleSubmit} disabled={loading}>
                    {loading ? 'Loading...' : 'Publish'}
                </button>
            </form>
        </div>
    )
}

export default UpdateCourse
