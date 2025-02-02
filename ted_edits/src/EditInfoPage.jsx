import { useParams } from "react-router"
import { editsArray } from "./EditsObject"
import TopBar from "./TopBar"

export default function EditInfoPage(){
    let params = useParams()
    // let editObj = 
    

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

    return(
        <div className="edit_info_container">
            <TopBar/>
            <iframe width="560" height="315" 
                src={`${embedPlatform}${embedId}`} 
                title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
            {/* <img className="edit_embed" src={editObj[0].THUMBNAIL}/> */}
            <h2>{editObj[0].GALLERY_ASSET}</h2>
        </div>
    )
}