import ThumbNail from "./Thumbnail"
import ThumbnailCopy from "./ThumbnailCopy"

export default function EditSampleBox({THUMBNAIL, GALLERY_ASSET, ROLE, NETWORK, COPY }){
    
    return(
        <div className="edit-sample-box">
            <ThumbNail gif={THUMBNAIL}/>
            <span className="thumb_title">{GALLERY_ASSET}</span>
            <span className="network_role">{NETWORK} {ROLE}</span>
            <ThumbnailCopy COPY={COPY}/>
        </div>
    )
}