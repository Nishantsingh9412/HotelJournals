import React from 'react'

// import jobImg from '../../assets/img/jobImg2.jpg'
// import HiringImg from '../../assets/img/Hiring.gif'
import GirlImg from '../../assets/img/IMG_8048_edited.png'

import CSS from './FindJobs.module.css'
import 'animate.css';


const FindJobs = () => {
    return (
        <div className='mt-5'>
            {/* <h2> this is find jobs page </h2> */}
            {/* <div className='container'>
            <img src={jobImg} alt="" height={350} width={280} />

        </div> */}


            <div class="row row-cols-2 row-cols-md-2 m-0 pt-4 pb-4 " style={{ background: '#EBECE6' }}>
                <div class="col" >
                    <div class="card w-75 ml-5">
                        <img src={GirlImg} className=" img-responsive" alt="job_man" style={{ borderRadius: '50px' }} />
                        {/* <div class="card-body mr-5">
                            <h5 class="card-title font-bold">Find Jobs </h5>
                            <p class="card-text ">Hotel Journals is your go-to job search website, offering a vast database of job listings across diverse industries. Our intuitive platform simplifies the search process, helping you find the right career opportunity.  </p>
                        </div> */}
                    </div>
                </div>
                <div className='col pt-5 pl-5 pr-5 '>
                    <p> CONOCEME  </p>

                   










                    <h1 className="card-title text-dark" >  Soy Naira y los hoteles siempre fueron mi gran sueño.  </h1>
                    <p className='mt-4' style={{ textAlign:'justify' }} >
                        Llevo en el mundo del turismo desde los 19 años. Pasando por puestos como Animación, Recepción, Guest Experience Manager y Dirección. 
                        Estudié la carrera de Turismo y tras finalizar realicé un MBA en Hospitality & Tourism Management.  
                    <p className='mt-4'>
                    En este tiempo pude ver que los profesionales de turismo éramos los únicos que no contábamos con una comunidad ni con unos productos que nos hicieran diferenciarnos y adorar nuestro trabajo. 
                    El contenido creado en redes en relación al turismo siempre ha sido enfocado desde el punto de vista de los turistas pero nunca desde el punto de vista de los turismólogas/os. 
                    </p>
                    <p>
                        Es por eso que quise dar un paso al frente creando así algo específico y especial para nosotras/os, con el objetivo de que podamos presumir de nuestro trabajo sintiéndonos orgullosos/as 
                        de lo que hacemos cada día. 
                    </p>
                    <p className='mt-4'>
                        De esta idea nace Hotel Journals. Una marca hecha por y para profesionales del turismo. 
                        En poco tiempo somos una comunidad que se apoya, comparte tips y nos reímos juntos/as. Algo que necesitan todas las personas, una comunidad donde sentirse identificado.
                    </p>
                    </p>
                    <div class="text-center ">
                        <button className={` mt-3 ${CSS.aboutMeBtn}`} > Explore</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindJobs
