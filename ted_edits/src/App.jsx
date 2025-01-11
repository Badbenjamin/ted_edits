import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TopBar from './TopBar'
import EditSampleBox from './EditSampleBox'

import HOMER from './assets/Homer_at_the_Bat.gif'
import OCP from './assets/OCP10.jpg'

const thumbnailArray = [HOMER, OCP]


const sampleGallery = thumbnailArray.map((thumb)=>{
  return <EditSampleBox gif={thumb}/>
})

function App() {
  
  return (
    <>
      <TopBar/>
      {sampleGallery}
      
    </>
  )
}

export default App
