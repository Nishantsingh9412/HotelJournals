import React, { lazy } from 'react'

import blogheaderImg from '../../assets/img/blogs_head_img.jpg'

const TipsHeadSection = () => {
  return (
    <div className='container mt-2'>
      <div className='row' >
        <div className='col' style={{ marginTop: '9vw' }}>
          <h1 style={{ fontWeight: '700' }}> Descubre los secretos del Back Office  </h1>
          <p className='mt-4' style={{ fontSize: 'larger', fontWeight: 400 }}>
            En la industria del turismo y la hotelería, el éxito radica en la armonía
            entre el escenario frontal y el bastidor detrás de escena. En nuestro blog,
            compartiremos valiosos consejos y estrategias para los trabajadores del sector,
            exploráremos cada rincón del back office para descubrir los secretos que impulsan
            el corazón de la industria del turismo y la hospitalidad.Tanto si tienes experiencia
            en el sector como si estás buscando tu primera oportunidad, encontrarás en este
            espacio un lugar donde nos ayudaremos entre todos para seguir progresando de la mano.
          </p>
          <button className='btn btn-dark mt-3'>
            {/* Check Tips */}
            Descubrir secretos 
          </button>
        </div>
        <div className='col'>
          <img className='w-75 pt-4 ml-5 pl-5 ' src={blogheaderImg} alt="" style={{ borderRadius: '10%' }} />
        </div>
      </div>
    </div>
  )
}

export default TipsHeadSection
