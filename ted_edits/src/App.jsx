import './App.css'

import TopBar from './TopBar'
import EditSampleBox from './EditSampleBox'

import { editsArray } from './EditsObject'

// const thumbnailArray = [HOMER, OCP, HOMER, OCP]


const sampleGallery = editsArray.map((editObject)=>{
  console.log(editObject['THUMBNAIL'])
  return <EditSampleBox 
          key={editObject['id']}
          className="edit-sample-box" 
          THUMBNAIL={editObject['THUMBNAIL']}
          GALLERY_ASSET={editObject['GALLERY_ASSET']}
          NETWORK={editObject['NETWORK']}
          ROLE={editObject['ROLE']}
          COPY={editObject['COPY']}
          />
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
