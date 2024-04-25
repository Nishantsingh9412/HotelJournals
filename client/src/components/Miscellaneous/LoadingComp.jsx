import React from 'react'
import Logo from '../../assets/img/logo.png'

const LoadingComp = () => {
  return (
    <div>
        <div
            style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            backgroundColor: '#000000',
            opacity: '0.9',
            position: 'fixed',
            zIndex: '1000',
            }}
        >
            <img src={Logo} alt='Logo' style={{ width: '200px' }} />
        </div>
    </div>
  )
}

export default LoadingComp
