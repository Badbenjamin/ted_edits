

export default function ThumbNail({gif, windowSize}){
    let width = 600
    

    if (windowSize.width >= 900){
        console.log('over 900')
        width = 400
        // height = 250

    } else if (windowSize.width >= 600 && windowSize.width <= 900){
        console.log('btw 600 and 900')
        width = 300
        // height = 200
    } else if (windowSize.width < 600) {
        console.log('> 600')
        width = 300
        // height = 200
    }
    let height = width*.5642
    return(
        <div>
            <img width={width} height={height}  className="thumbnail" src={gif} alt='alt text'/>
        </div>
        
    )
}