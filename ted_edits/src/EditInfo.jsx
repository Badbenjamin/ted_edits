
export default function EditInfo({editObj, embedId, embedPlatform, windowSize}){
    return(
        <div className="edit-info">
            <div className="iframe-container">
                <iframe className="iframe" 
                    height={windowSize['height']/2}
                    width={windowSize['height']/1}
                    src={`${embedPlatform}${embedId}`} 
                    title="YouTube video player" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen></iframe>
            </div>
            <div className="edit-info-text">
                <h1>{editObj[0].GALLERY_ASSET}</h1>
                <h2>{editObj[0]["ROLE"]} - {editObj[0]['NETWORK']}</h2>
                <p className="edit_copy">{editObj[0]['COPY']}</p>
            </div>
        </div>
    )   
}