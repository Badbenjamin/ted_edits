import ThumbNail from "./Thumbnail"
import ThumbnailCopy from "./ThumbnailCopy"
import { Link } from "react-router"


export default function EditSampleBox({THUMBNAIL, GALLERY_ASSET, ROLE, NETWORK, COPY, id, handleClick}){
    
    function onClick(){
        handleClick(id)
    }
    return(
        <div onClick={onClick} className="edit-sample-box">
            <ThumbNail gif={THUMBNAIL}/>
            <span className="thumb_title">{GALLERY_ASSET}</span>
            <span className="network_role">{NETWORK} {ROLE}</span>
            <ThumbnailCopy COPY={COPY}/>
            <Link to={`/edits/${id}`}>LINK</Link>
        </div>
    )
}