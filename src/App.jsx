import { Link, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'


import './App.css'

import TopBar from './TopBar'
import EditSampleBox from './EditSampleBox'
import Footer from './Footer'
import { editsArray } from './EditsObject'

function App() {
  let [windowSize, setWindowSize] = useState({"width" : window.innerWidth, "height" : window.innerHeight})
  console.log(windowSize)
  function handleClick(id){
    console.log(id)
  }

  const sampleGallery = editsArray.map((editObject)=>{
    // console.log(editObject['THUMBNAIL'])
    return <EditSampleBox
            id={editObject["id"]} 
            key={editObject['id']}
            className="edit-sample-box" 
            THUMBNAIL={editObject['THUMBNAIL']}
            GALLERY_ASSET={editObject['GALLERY_ASSET']}
            NETWORK={editObject['NETWORK']}
            ROLE={editObject['ROLE']}
            COPY={editObject['COPY']}
            handleClick={handleClick}
            windowSize={windowSize}
            />
  })

  useEffect(()=>{
    function handleResize(){
      setWindowSize({
        "height" : window.innerHeight,
        "width" : window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <div className='app-container'>
      
      <div className='header'>
        <TopBar/>
      </div>
      <div className='edit-content'> 
        {sampleGallery}
      </div>
      <div className='footer'>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
