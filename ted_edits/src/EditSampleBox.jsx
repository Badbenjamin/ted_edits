import ThumbNail from "./Thumbnail"
import ThumbnailCopy from "./ThumbnailCopy"
import { Link, useNavigate } from "react-router"
import { useRef } from "react"


export default function EditSampleBox({THUMBNAIL, GALLERY_ASSET, ROLE, NETWORK, COPY, id, handleClick, windowSize}){
    let navigate = useNavigate()
    const thumbHeight = useRef(`width:'${windowSize.height}px'`.current) 
    const thumbWidth = useRef(`height:'${windowSize.width}px'`.current)
    console.log('ws',thumbHeight.current, thumbWidth.current)

    function onClick(){
        // handleClick(id)
        navigate(`/edits/${id}`)
    }
    return(
        <div style={{thumbHeight, thumbWidth}} onClick={onClick} className="edit-sample-box">
            <ThumbNail gif={THUMBNAIL}/>
            <span className="thumb_title">{GALLERY_ASSET.toUpperCase()}</span>
        </div>
    )
}