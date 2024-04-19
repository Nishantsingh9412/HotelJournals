import React from 'react'

import styles from './NewsLetter.module.css'

const NewsLetter = () => {
    return (
        // <div className='m-5'>
        //     <div
        //         style={{
        //             backgroundColor: '#B04AED',
        //             borderRadius: '30px',
        //             alignContent: 'center'
        //         }}
        //         className='w-50 p-3'
        //     >
        //         <h3 className='p-2'>Join Our newsLetter</h3>
        //         <p>Subscribe and don’t miss any update from us 🚀</p>

        //         <div 
        //             className='text-center'
        //         >
        //             <input
        //                 type="text"
        //                 placeholder='example@mail.com'
        //                 style={{
        //                     padding: '5px',
        //                     background: '#c6a8d8',
        //                     borderRadius: '10px 0px 0px 10px'
        //                 }}
        //             />
        //             <button
        //                 className='btn btn-primary'
        //             >
        //                 Subscribe
        //             </button>
        //         </div>

        //     </div>
        // </div>


        <div>
            <div className='mb-5'>
                <div className={`${styles.containerNews}`}  >
                    <h3 className={styles.titleNews}>Join our newsletter ! 🎉✨</h3>
                    <p style={{ color: 'white' }} >Subscribe and don’t miss any update from us 🚀  </p>
                    <div className={styles.flexContainerNews}>
                        <input
                            className={styles.inputNews}
                            placeholder="example@mail.com"
                            type="email"
                        />
                        <button className={styles.buttonNews}>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
