import React from 'react'
import { FaRegBuilding } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";
import { ImNotification } from "react-icons/im";

import img1 from "../../assets/Dashboarddimg/img11.jpg";
import img from "../../assets/Dashboarddimg/imgchart.jpg"
import styles from './Dashboardd.module.css'
// import { FaTwitter } from "react-icons/fa";


const Dashboardd = () => {
  return (
    <div className={styles.DashboardContainer}>
      <div className={styles.DashboardCardContainer}>
       <div className={styles.DashboardCard }   >
           <div className={styles.CardHead}>
            <span>Application</span>
            <div className= {styles.headlogo}><FaRegBuilding /></div>
           </div>
           <div className={styles.Cardbottom}>
           <div className= {styles.cardlogo}><FaUserCheck /></div>
               <div className={styles.CardBottomDetail}>
                <span>0</span>
                <p>2</p>
               </div>
           </div>
        </div>
       <div className={styles.DashboardCard}>
           <div className={styles.CardHead}>
            <span>Total Views</span>
            <div className= {styles.headlogo}><FiActivity /></div>
           </div>
           <div className={styles.Cardbottom}>
           <div className= {styles.cardlogo}><IoEyeSharp /></div>
               <div className={styles.CardBottomDetail}>
                <span>33</span>
                <p>2</p>
               </div>
           </div>
        </div>
       <div className={styles.DashboardCard}>
           <div className={styles.CardHead}>
            <span>Rating/Reviews</span>
            <div className= {styles.headlogo}><FaStarHalfStroke /></div>
           </div>
           <div className={styles.Cardbottom}>
           <div className= {styles.cardlogo}><IoIosStar /></div>
               <div className={styles.CardBottomDetail}>
                <span>23</span>
                <p>2</p>
               </div>
           </div>
        </div>
       
        </div>
        <div className={styles.Dashboardmiddle}>
     <div className={styles.middleleft}></div>
     <div className={styles.middleright}> 

                           <div className= {styles.Qrimg}>
                            <img src={img1} alt="" />
                           </div>
                           <p>Share it on:</p>
                           <div className={styles.middlelogocontainer}>
                            <div className= {styles.middlelogo}> <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/social-share/mail-icon.svg" alt="" /></div>
                            <div className={styles.middlelogo}><img src="https://d8it4huxumps7.cloudfront.net/uploads/images/social-share/whatsapp-icon.svg" alt="" /></div>
                            <div className={styles.middlelogo}><img src="https://d8it4huxumps7.cloudfront.net/uploads/images/social-share/linkedin-icon.svg" alt="" /></div>
                            <div className={styles.middlelogo}><img src="https://d8it4huxumps7.cloudfront.net/uploads/images/social-share/mail-icon.svg" alt="" /></div>
                            <div className={styles.middlelogo}><img src="https://d8it4huxumps7.cloudfront.net/uploads/images/65b8ddae44fdd_twitter_logo.svg" alt="" /></div>
                           </div>
                           <dir className ={styles.buttoncontainer}>
                              <span>https://unstop.com/o/slKhcDP?lb </span>
                            <div className={styles.buttonlogo}><a href=""><FaRegCopy /></a></div>
                           </dir>
     </div  >

        </div>
        <div className={styles.GenderRatio}>
          <div className={styles.RatioHeading}>
            <span>Gender</span>
            <div className = {styles.ratioicon}><ImNotification /></div>
          </div>
         <div className= {styles.graphcontainer}>
          <div className={styles.gendergraph}><img src={img} alt="" /></div>
          <div className={styles.graphright}>
             <div className= {styles.gender}>
               <div className={styles.gendercon}></div> 
              <span>Female</span>
              </div>
              <div className= {styles.gender}>
               <div className={styles.gendercon}></div> 
              <span>Male</span>
              </div>
              <div>
             </div>
            
          </div>
          

          </div>
          
        </div>



       
    </div>
  )
}

export default Dashboardd