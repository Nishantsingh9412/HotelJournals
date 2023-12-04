import React from 'react'
import CSS from './Section4.module.css'
import { ReactComponent as Hi } from './hi.svg'

const Section4 = () => {
    return (<>

        <div className={` container-fluid ${CSS.mainContainer} `} >
            <div className=''>
                <div className='d-flex flex-column'>
                    <div className={CSS.MainHeading}>
                        <p>  Are You Ready To Work With Us Now? </p>
                    </div>
                    <div>
                        <p className={CSS.subH}> What do you think after seeing the good <br />response from our previous customers</p>
                        {/* <Hi className={CSS.svgComponent} /> */}
                    </div>
                </div>
        <button className={ ` btn ${CSS.btnP}`} > Check Jobs  </button>
            </div>

        </div>

    </>
    )
}

export default Section4
