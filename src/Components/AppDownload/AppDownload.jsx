import React from 'react'
import './appDownload.css'
import app_store from '../../Assets/app_store.png'
import play_store from '../../Assets/play_store.png'

const AppDownload = () => {
  return (
    <div className='appdownload'>
        <h1>For Better Experience Download</h1>
        <h1>Tomato App</h1>
        <div className="appdownload-images">
            <img src={app_store} alt="app store" />
            <img src={play_store} alt="play store" />
        </div>
      
    </div>
  )
}

export default AppDownload
