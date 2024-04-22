import React from 'react'

import journalImage from '../../assets/img/jounal_IMG.jpeg'
import 'animate.css';

const journalbgImgStyle = {
    backgroundImage: `url(${journalImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '60vw',
    width: '97vw',
    opacity: 0.6,
}

const relativeMainContainer = {
    position: 'relative',
}

const journalsContentHeading = {
    position: 'absolute',
    top: '5vw',
    left: '5vw',
    fontSize:'xxx-large',
    fontWeight:'700',
    borderBottom:' 4px solid black'
}
const journalsContentDesc = {
    position: 'absolute',
    top: '10vw',
    left: '5vw',
    alignItems:'center',
}

const moveSomePxTopButton = {
    position: 'absolute',
    top: '55vw',
    left: '38vw',
    // backgroundColor:'#E4B49D',
    // start: 30,
}



const Journals = () => {
    return (
        <div >
            <div className='container-fluid bg' style={relativeMainContainer} >
                <img src={journalImage} className=" pl-5 img-rounded  img-responsive" alt="job_man" style={journalbgImgStyle} />
                <center>
                    <button className='btn btn-dark w-25' style={moveSomePxTopButton} >  See Journals  </button>
                </center>

                <div>
                    <p className='h2' style={journalsContentHeading}> Journals </p>

                    <p className='h5 w-25' style={journalsContentDesc}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, eligendi similique suscipit, hic delectus repellat iste animi dolore enim saepe dolores fugiat debitis perferendis earum possimus quidem. Minus, neque officiis? </p>
                </div>
            </div>
        </div>
    )
}

export default Journals
