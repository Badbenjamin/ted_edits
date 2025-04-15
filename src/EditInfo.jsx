import './App.css'
import { useNavigate } from 'react-router'
import { editsArray } from './EditsObject'

export default function EditInfo({editObj, embedId, embedPlatform, windowSize}){
    let navigate = useNavigate()
    let editIds = editsArray.map((edit)=>{
        return edit.id
    })
    let currentId = editObj[0].id
    
    // let height = windowSize['height']
    let width = 1200
    if (windowSize['width'] > 1200){
        width = 1200
    } else if (windowSize['width'] >= 900 && windowSize['width'] <= 1200){
        width = 900
    } else if (windowSize['width'] < 900 && windowSize['width'] >= 600){
        width = 600
    } else {
        width = 300
    }
    console.log('ww', windowSize.width)
    function handleNav(direction){
    
        if (direction == 'next' && (currentId + 1 < editIds.length)){
            navigate(`/edits/${currentId + 1}`)
        } else if (direction == 'next' && (currentId + 1 >= editIds.length)){
            navigate(`/edits/${editIds[0]}`)
        } else if (direction == 'prev' && (currentId - 1 >= editIds[0])){
            navigate(`/edits/${currentId - 1}`)
        } else if ((direction == 'prev' && (currentId == editIds[0]))){
            navigate(`/edits/${editIds.length - 1}`)
        }
    }
    return(
        <div className="edit-info">
            <div className="iframe-container">
                <iframe className="iframe" 
                    height={width*.5625}
                    width={width}
                    src={`${embedPlatform}${embedId}`} 
                    title="YouTube video player" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen></iframe>
            </div>
            <div className='edit-title-and-text-container'>
                <div className="edit-info-title">
                    <h1>{editObj[0].GALLERY_ASSET}</h1>
                </div>
                <div className="edit-info-text">
                    <h2>{editObj[0]["ROLE"]} / {editObj[0]['NETWORK']}</h2>
                    <p  className="edit_copy">{editObj[0]['COPY']}</p>
                </div>
            </div>
            <div className="nav-buttons">
                <button className="nav-button" onClick={()=>handleNav('prev')}>prev</button><button className="nav-button" onClick={()=>handleNav('next')}>next</button>
            </div>
        </div>
    )   
}