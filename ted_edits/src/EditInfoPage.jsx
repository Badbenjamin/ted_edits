import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { editsArray } from "./EditsObject"
import TopBar from "./TopBar"
import EditInfo from "./EditInfo"

// function getWindowDimensions(){
// //     const {innerWidth: width, innerHeight : height} = window
// //     return{
// //         width,
// //         height
// //     }
// // }

export default function EditInfoPage(){
    let params = useParams()
    let [windowSize, setWindowSize] = useState({"width" : window.innerWidth, "height" : window.innerHeight})
    

    // console.log(params)
    let editObj = editsArray.filter((edit)=>{
        if (edit.id == params['id']){
            return edit
        }
    })
    let embedPlatform = editObj[0]['EMBED_PLATFORM']
    let embedId =editObj[0]['EXTERNAL_LINK']
    // console.log(editObj[0]["GALLERY_ASSET"])
    console.log('eid',embedId)

    if (!editObj){
        return(
            <>loading!</>
        )
    }
    console.log(window.innerHeight)

    useEffect(()=>{
        function handleResize(){
            setWindowSize({
                "height" : window.innerHeight,
                "width" : window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)
    },[])

    
    return(
        <div className="app-container">
            <div className="header">
                <TopBar/>
            </div>
            
            <div className="edit-info-container">
                <EditInfo editObj={editObj} windowSize={windowSize} embedPlatform={embedPlatform} embedId={embedId}/>
            </div>
        </div>
        
    )
}