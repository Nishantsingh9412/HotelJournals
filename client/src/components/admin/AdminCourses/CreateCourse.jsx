import React, { useEffect, useState } from "react";
import Select from "react-select";
import toast, { Toaster } from "react-hot-toast";

import languages from "./languages";
import { useDispatch } from "react-redux";
import { SetCourse } from "../../../redux/actions/courseAdmin";

// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
// ]

const CreateCourse = () => {
    const dispatch = useDispatch();
    const [courseTitle, setCourseTitle] = useState("");
    const [courseDesc, setCourseDesc] = useState("");
    const [courseLanguage, setCourseLanguage] = useState([]);
    const [courseLink, setCourseLink] = useState("");
    const [courseFormat, setCourseFormat] = useState("");
    const [isFree, setIsFree] = useState(false);
    const [coursePrice, setCoursePrice] = useState("");
    const [courseDurationValue, setCourseDurationValue] = useState("");
    const [courseDurationUnit, setCourseDurationUnit] = useState("");
    const [courseDuration, setCourseDuration] = useState("");
    const [courseCompany, setCourseCompany] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [picThumb, setPicThumb] = useState("");
    const [picLogo, setPicLogo] = useState("");
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCourseDuration(courseDurationValue + " " + courseDurationUnit);
  }, [courseDurationValue, courseDurationUnit]);

  const postThumbnail = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast.error("This didn't work.");
      return;
    }
    if (pics.type !== "image/jpeg" && pics.type !== "image/png") {
      toast.error("Invalid image format");
      return;
    }
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "Hotel_Journals_app");
    data.append("cloud_name", "dwahql1jy");
    fetch("https://api.cloudinary.com/v1_1/dwahql1jy/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPicThumb(data.url.toString());
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const postLogo = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast.error("This didn't work.");
      return;
    }
    if (pics.type !== "image/jpeg" && pics.type !== "image/png") {
      toast.error("Invalid image format");
      return;
    }
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "Hotel_Journals_app");
    data.append("cloud_name", "dwahql1jy");
    fetch("https://api.cloudinary.com/v1_1/dwahql1jy/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPicLogo(data.url.toString());
        console.log(data);
        setLoading(false);
    })
    .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
        courseTitle,
        courseDesc,
        courseLanguage,
        courseLink,
        courseFormat,
        isFree,
        coursePrice,
        courseDuration,
        courseCompany,
        picThumb,
        picLogo
    );
    if (
        !courseTitle ||
        !courseDesc ||
        !courseLanguage ||
        !courseLink ||
        isFree === null ||
        !courseFormat ||
        !courseDurationValue ||
        !courseDurationUnit ||
        !courseCompany ||
        !picThumb ||
        !picLogo ||
        (isFree === false && coursePrice === "")
    ) {
        return toast.error("Please fill all fields");
    }
    if (courseDesc.length < 200) {
        return toast.error("Course Description must be more than 200 characters");
    }

    const courseData = {
        title: courseTitle,
        description: courseDesc,
        company_name: courseCompany,
        price: coursePrice,
        isFree: isFree,
        difficulty: difficulty,
        course_link: courseLink,
        format: courseFormat,
        languages: courseLanguage,
        duration: courseDuration,
        banner_image: picThumb,
        brand_image: picLogo,
    };

    const response = dispatch(SetCourse(courseData));
    console.log("This is response.path  " + response.path);
    toast.success("Course Posted Successfully");
};

return (
    <div className="container mt-4 mb-3">
        <Toaster />
        <form>
        <div className="form-group">
            <label htmlFor="course_title">Course Title</label>
            <input
            type="text"
            className="form-control"
            placeholder="Intro to methodolgy"
            onChange={(e) => setCourseTitle(e.target.value)}
            />
        </div>

        <div className="form-group">
            <label htmlFor="difficulty">Course Difficulty Level</label>
            <select
                id="difficulty"
                className="form-control"
                onChange={(e) => setDifficulty(e.target.value)} >
                <option value="Select">Select</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
            </select>
        </div>

        <div className="form-group">
            <label htmlFor="course_desc">
            Course Description (Minimum 200 Words)
            </label>
            <textarea
            type="text"
            rows="5"
            className="form-control"
            placeholder="Add Course Description"
            onChange={(e) => setCourseDesc(e.target.value)}
            ></textarea>
        </div>

        <div className="form-row">
            <div className="form-group col-md-6">
            <label htmlFor="inputLanguages">Course Language</label>
            <Select
              options={languages}
              isMulti
              onChange={(selectedOptions) =>
                setCourseLanguage(selectedOptions.map((option) => option.value))
              }
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="course_link">Course Link</label>
            <input
                type="url"
                className="form-control"
                placeholder="https://www.example.com/course/nanocourse-111"
                onChange={(e) => setCourseLink(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
            <div className="form-group col-md-6">
            <label htmlFor="format">Format</label>
            <select
                id="format"
                className="form-control"
                onChange={(e) => setCourseFormat(e.target.value)}
            >
                <option value="Select">Select</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Both">Both</option>
            </select>
            </div>

        <div className="form-group col-md-6">
            <label className="ml-1 mt-1 mb-2">Is this course free?</label> <br />
            <>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="isFree"
                id="yes"
                value={true}
                checked={isFree === true}
                onChange={() => setIsFree(true)}
                />
                <label className="form-check-label" htmlFor="yes">
                Yes
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input
                className="form-check-input"
                type="radio"
                name="isFree"
                id="no"
                value={false}
                checked={isFree === false}
                onChange={() => setIsFree(false)}
                />
                <label className="form-check-label" htmlFor="no">
                No
                </label>
            </div>
            </>
        </div>
        </div>
        <div className="form-row">
        {isFree ? (
            <>
                {/* True Case */}
            </>) : (<>
                <div className='form-group mt-3'>
                    <label htmlFor="price"> Course Price </label>
                    <input type="text" className='form-control' placeholder='$105.45' onChange={(e) => setCoursePrice(e.target.value)} />
                </div> </>)
        }
        </div>
        <div className="form-row">
        <div className="form-group col-md-4">
            <label htmlFor="inputState">Course Duration Value</label>
            <input
              type="number"
              className="form-control"
              placeholder="4.5"
              onChange={(e) => setCourseDurationValue(e.target.value)}
            />
          </div>

          <div className="form-group col-md-2">
            <label htmlFor="inputState"> Duration Unit </label>
            <select
              className="form-control"
              onChange={(e) => setCourseDurationUnit(e.target.value)}
            >
              <option value=""> Select </option>
              <option value="Hours">Hours</option>
              <option value="Days">Days</option>
              <option value="Weeks">Weeks</option>
              <option value="Months">Months</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="company_name">Course provider company Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Example Solutions pvt. ltd."
              onChange={(e) => setCourseCompany(e.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputZip">Course Thumbnail </label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => postThumbnail(e.target.files[0])}
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputZip">Company Logo</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => postLogo(e.target.files[0])}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-3 btn btn-success w-100"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Loading..." : "Publish"}
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;
