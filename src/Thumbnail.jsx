

export default function ThumbNail({gif, windowSize}){
    let width = 600
    let height = width*.5642

    if (windowSize.width >= 900){
        console.log('over 900')
        width = 400
        height = width*.5642

    } else if (windowSize.width >= 600 && windowSize.width <= 900){
        console.log('btw 600 and 900')
        width = 300
        height = width*.5642
    } else if (windowSize.width < 600) {
        console.log('> 600')
        width = 300
        height = width*.5642
    }
    // let height = width*.5642
    return(
        <div>
            <img width={width} height={height}  className="thumbnail" src={gif} alt='alt text'/>
        </div>
        
    )
}