import ThumbNail from "./Thumbnail"
import ThumbnailCopy from "./ThumbnailCopy"

export default function EditSampleBox({gif}){
    console.log(gif)
    return(
        <div className="edit-sample-box">
            <ThumbNail gif={gif}/>
            <ThumbnailCopy/>
        </div>
    )
}