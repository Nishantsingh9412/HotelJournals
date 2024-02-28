import React, { useState } from "react";
import JobDynamicCard from "./JobDynamicCard";
import stylesJS from "./JobSearch.module.css"; // Import the CSS module

import apple from "../../assets/jobsearchimg/apple.png";
import twitter from "../../assets/jobsearchimg/twitter.png";
import dribble from "../../assets/jobsearchimg/dribble.png";
import airbnb from "../../assets/jobsearchimg/airbnb.png";

const Job_search = () => {
  // Accordion section Start
  const [checkboxValues, setCheckboxValues] = useState({});
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const handleItemClick = (index) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter((item) => item !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  const handleCheckboxChange = (event, checkboxIndex) => {
    const updatedCheckboxValues = {
      ...checkboxValues,
      [checkboxIndex]: event.target.checked,
    };
    setCheckboxValues(updatedCheckboxValues);
  };

  const accordionItems = Array.from({ length: 2 }, (_, index) => {
    let title = `Item ${index + 1}`;
    let labels = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

    if (index === 0) {
      title = "Working schedule";
      labels = [
        "Full Day",
        "flexible schedule",
        "shift work",
        "Distant work",
        "Shift method",
      ];
    } else if (index === 1) {
      title = "Employment type";
      labels = [
        "Full time",
        "Part time",
        "Internshp",
        "Project Work",
        "Volunteering",
      ];
    }

    return {
      title: title,
      content: (
        <div className="" key={index}>
          {labels.map((label, i) => (
            <div className="pl-2 flex gap-2 " key={i}>
              <input
                className="cursor-pointer"
                type="checkbox"
                onChange={(event) =>
                  handleCheckboxChange(event, `checkbox${index + 1}_${i + 1}`)
                }
                checked={
                  checkboxValues[`checkbox${index + 1}_${i + 1}`] || false
                }
                style={{ backgroundColor: 'blue' }}
              />
              <label style={{color: checkboxValues[`checkbox${index + 1}_${i + 1}`] ? 'red' : 'grey' }}>{label}</label>
              <br />
            </div>
          ))}
        </div>
      ),
    };
  });

  //  Accordion section end

  //card data 
  const cardData = [
    {
      itemDate: "February 14, 2024",
      bookmarkLogo: "path/to/bookmark_logo1.png",
      companyName: "Apple",
      position: "Software Engineer",
      companyLogo: apple,

      workOptions: ["Part-time", "Senior Level", "Distant", "Project Work", "Flexible Schedule"],
      details: {
        salary: "$80,000",
        address: "123 Main St, City, Country",
        details: "Detail"
      },
      color: "green",
    },
    {
      itemDate: "February 14, 2024",
      bookmarkLogo: "path/to/bookmark_logo2.png",
      companyName: "Example Company 2",
      position: "Frontend Developer",

      companyLogo: twitter,
      workOptions: ["Full-time", "Entry Level", "In-office", "Team Work", "Fixed Schedule"],
      details: {
        salary: "$60,000",
        address: "456 Oak St, Town, Country",
        details: "Detail"
      },
      color: "green-400",
    },
    {
      itemDate: "February 14, 2024",
      bookmarkLogo: "path/to/bookmark_logo2.png",
      companyName: "Example Company 2",
      position: "Frontend Developer",
      companyLogo: airbnb,
      workOptions: ["Full-time", "Entry Level", "In-office", "Team Work", "Fixed Schedule"],
      details: {
        salary: "$60,000",
        address: "456 Oak St, Town, Country",
        details: "Detail"
      },
      color: "red-300",
    },
    {
      itemDate: "February 14, 2024",
      bookmarkLogo: "path/to/bookmark_logo2.png",
      companyName: "Example Company 2",
      position: "Frontend Developer",
      companyLogo: airbnb,
      workOptions: ["Full-time", "Entry Level", "In-office", "Team Work", "Fixed Schedule"],
      details: {
        salary: "$60,000",
        address: "456 Oak St, Town, Country",
        details: "Detail"
      },
      color: "red-300",
    },
    {
      itemDate: "February 14, 2024",
      bookmarkLogo: "path/to/bookmark_logo2.png",
      companyName: "Example Company 2",
      position: "Frontend Developer",
      companyLogo: dribble,
      workOptions: ["Full-time", "Entry Level", "In-office", "Team Work", "Fixed Schedule"],
      details: {
        salary: "$60,000",
        address: "456 Oak St, Town, Country",
        details: "Detail"
      },
      color: "teal",
    },
    {
      itemDate: "February 14, 2024",
      bookmarkLogo: "path/to/bookmark_logo2.png",
      companyName: "Example Company 2",
      position: "Frontend Developer",
      companyLogo: airbnb,
      workOptions: ["Full-time", "Entry Level", "In-office", "Team Work", "Fixed Schedule"],
      details: {
        salary: "$60,000",
        address: "456 Oak St, Town, Country",
        details: "Detail"
      },
      color: "[#FFE1CC]",
    },
  ];

  return (
    <>
      <div className={stylesJS.container}>
        {/* <div className="flex sm:flex-row flex-col p-4"> */}
          {/* left container  */}

          <div className={stylesJS.leftContainer}>
            <div className={stylesJS.leftContainerInner}>
              <h1 className={stylesJS.containerTitle}>Get Your Best Profession With Luckyjob</h1>
              <div className={stylesJS.learnMoreButton}>Learn More</div>
            </div>

            {/* Accordion start */}
            <div className={stylesJS.accordionContainer}>
              {accordionItems.map((item, index) => (
                <div className={stylesJS.accordionItem} key={index}>
                  <div
                    className={stylesJS.accordionTitle}
                    onClick={() => handleItemClick(index)}
                  >
                    {item.title} {expandedIndexes.includes(index) ? <h1 className={stylesJS.accordantriangle}>▼</h1> : <h1 className={stylesJS.accordantriangle}>▶</h1>}
                  </div>
                  {expandedIndexes.includes(index) && <div className={stylesJS.accordionContent}>{item.content}</div>}
                </div>
              ))}
            </div>
            {/* Accordion end */}
          </div>

          {/* right container  */}
          <div className={stylesJS.rightContainer}>
            <div className={stylesJS.header}>
              <div className={stylesJS.recommendedJobsTitle}>
                <h1>Recommended jobs</h1>
                <div className={stylesJS.jobsNumber}>
                  386
                </div>
              </div>
              <div className={stylesJS.lastUpdateContainer}>
                <h1 className={stylesJS.lastUpdateTitle}>Last upadte</h1>
              </div>
            </div>

            <div className={stylesJS.cardContainer}>
              {/* dynamic card */}
              {cardData.map((card, index) => (
                <JobDynamicCard key={index} {...card} />
              ))}
            </div>
          </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Job_search;
