import HOMER from "./assets/Homer_at_the_Bat.gif"
// import TEST from "./TEST.png"

export default function EditSampleBox(){
    return(
        <div>
            <img className="homer" src={HOMER} alt='homer gif'/>
            <p>image goes here?</p>
        </div>
    )
}