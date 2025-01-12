import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TopBar from './TopBar'
import EditSampleBox from './EditSampleBox'

import HOMER from './assets/Homer_at_the_Bat.gif'
import OCP from './assets/OCP10.jpg'

const thumbnailArray = [HOMER, OCP, HOMER, OCP]


const sampleGallery = thumbnailArray.map((thumb)=>{
  return <EditSampleBox className="edit-sample-box" gif={thumb}/>
})

function App() {
  
  return (
    <div className='container'>
      <div className='header'>
        <TopBar/>
      </div>
      <div className='edit-content'>
        {sampleGallery}
      </div>
      <div className='footer'>
        <p>ted@fuckmail.cum</p>
      </div>
      
    </div>
  )
}

export default App
