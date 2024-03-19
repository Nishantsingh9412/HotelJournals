import React from 'react';
import GirlImg from '../../assets/img/author.jpg';
import authorImg from '../../assets/img/About_me_pic_principal.jpg';
import 'animate.css';
import './FindJobs.css'

const FindJobs = () => {
  return (
    <div className='mt-5'>
      <div className="row m-0 pt-4 pb-4 w-100 justify-content-sm-center FJo1" style={{ background: '#EBECE6' }}>
        <div className="col-md-6 col-sm-12 FJoC" style={{ minWidth: "50%" }}>
          <div className="card">
            <img src={authorImg} className={`img-responsive imageRespStyleAboutMe`} alt="author-image" />
          </div>
        </div>
        <div className='col-md-6 col-sm-12 pt-5 pl-5 pr-5 FJoC'>
          <p> CONOCEME  </p>
          <h1 className="card-title text-dark" > De turismóloga a fundadora de una marca para profesionales del turismo  </h1>
          <p className='mt-4' style={{ textAlign: 'justify' }} >
            Llevo en el mundo del turismo desde los 19 años. Pasando por puestos como Animación, Recepción, Guest Experience Manager y Dirección.
            Estudié la carrera de Turismo y tras finalizar realicé un MBA en Hospitality & Tourism Management.
          </p>
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
        </div>
      </div>
    </div>
  );
};

export default FindJobs;