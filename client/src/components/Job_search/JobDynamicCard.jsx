import React, { useState } from 'react';
import { FaBookmark } from "react-icons/fa";
import stylesJD from './JobDynamicCard.module.css';

const JobDynamicCard = ({
  itemDate,
  bookmarkLogo,
  companyName,
  position,
  companyLogo,
  workOptions,
  details,
  key,
  color,
}) => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className={stylesJD.jobCard}>
        <div className={`${stylesJD.cardSection} ${stylesJD[color]}`}>

          <div className={stylesJD.dateSection}>
          <div className={stylesJD.dateBadge}>
            {itemDate}
          </div>
          <div className={stylesJD.bookmarkBadge} onClick={handleClick}>
            <FaBookmark className={`${stylesJD.bookmarkIcon} ${clicked ? stylesJD.textBlack : stylesJD.textWhite}`} />
          </div>
          </div>

          <div className={stylesJD.companyDetails}>
            <div className={stylesJD.companyDetailsName}>
            <p className={stylesJD.companyName}>{companyName}</p>
            <h1 className={stylesJD.companyPosition}>{position}</h1>
            </div>
          <div className={stylesJD.companyLogo}>
            <img src={companyLogo} alt="" />
          </div>
          </div>

          <div className={stylesJD.workOptions}>
            {workOptions.map((option, index) => (
              <button key={index} className={stylesJD.workOption}>{option}</button>
            ))}
          </div>
        </div>
        <div className={stylesJD.detailsSection}>
          <div className={stylesJD.detailsInfo}>
            <h1 className={stylesJD.detailsheading}>{details.salary}</h1>
            <p className={stylesJD.detailspara}>{details.address}</p>
          </div>
          <div className={stylesJD.detailsButton}>
            <h1>{details.details}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDynamicCard;
