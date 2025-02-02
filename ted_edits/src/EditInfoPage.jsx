import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { editsArray } from "./EditsObject"
import TopBar from "./TopBar"

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
        <div className="edit_info_container">
            <TopBar/>
            <iframe className="iframe" 
                height={windowSize['height']/1.5}
                width={windowSize['width']/1.5}
                src={`${embedPlatform}${embedId}`} 
                title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
            <h1>{editObj[0].GALLERY_ASSET}</h1>
            <h2>{editObj[0]["ROLE"]} - {editObj[0]['NETWORK']}</h2>
            <p className="edit_copy">{editObj[0]['COPY']}</p>
            
        </div>
    )
}