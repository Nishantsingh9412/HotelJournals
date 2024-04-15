import React from 'react'
import styles from './Resume.module.css'
import { FaDownload } from "react-icons/fa6";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Resume = () => {
  return (
    <>
      <div className={styles.resume}>
        <div className={styles.rheading}>
          <h1>Resume</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, optio.lorem5 Lorem ipsum dolor sit.</p>
          <div className={styles.up_date}>
            <div className={styles.up_dateheaing} >
              <h1>Resume.2024</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className={styles.rbutton}>
              <button className={styles.button}><a href=""><FaDownload /></a></button>
              <button className={styles.button}><a href=""><MdOutlineDeleteOutline /></a></button>
            </div>
          </div>
        </div>
        {/* <label for="formFile"  className="form-label">Default file input example</label> */}
        <div className={styles.inputfield}>
          <div className="mb-3 d-flex  flex-column align-items-center">
            <label for="formFile" className="form-label">Default file input example</label>
            <input className="form-control" type="file" id="formFile" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume