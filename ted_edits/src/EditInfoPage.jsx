import { useParams } from "react-router"
import { editsArray } from "./EditsObject"

export default function EditInfoPage(){
    let params = useParams()
    console.log(params)
    let editObj = editsArray.filter((edit)=>{
        if (edit.id == params['id']){
            return edit
        }
    })
    console.log(editObj[0]["GALLERY_ASSET"])
    return(
        <div>
            <img src={editObj[0].THUMBNAIL}/>
            <p>{editObj[0].GALLERY_ASSET}</p>
        </div>
    )
}