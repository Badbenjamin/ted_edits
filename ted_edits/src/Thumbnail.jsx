

export default function ThumbNail({gif, windowSize}){
    let width = windowSize.width/9
    let height = windowSize.width/16

    if (windowSize.width >= 900){
        console.log('over 900')
        width = width*2.5
        height = height*2.5
    } else if (windowSize.width >= 600 && windowSize.width <= 900){
        console.log('btw 600 and 900')
        width = width*3.6
        height = height*3.6
    } else if (windowSize.width < 600) {
        console.log('> 600')
        width = width*4.9
        height = height*4.9
    }
    
    return(
        <div>
            <img width={width} height={height}  className="thumbnail" src={gif} alt='alt text'/>
        </div>
        
    )
}