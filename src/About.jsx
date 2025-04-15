import TopBar from "./TopBar"
import Footer from "./Footer"
import TedPortrait from "../public/Ted Protrait.jpg"

export default function About(){
    return(
        <div className="app-container">
            <div className="header">
                <TopBar/>
            </div>
            <div className="about-container">
                <div className="about-image">
                    <img className="ted-pic" src={TedPortrait}/>
                </div>
                <div className="about-paragraph">
                    <p>Ted Eschweiler is a Brooklyn based editor with experience in documentary, branded content, and a specialty in adult animated comedy. His work has been featured across broadcast and streaming platforms including Showtime, Comedy Central, and Paramount Plus.
                    </p>
                    <br></br>
                    <p>In his free time away from an edit bay, Ted likes to bike through New York, hike outside of it, and generally be in the woods.</p>
                    <br></br>
                    <p>Let’s make a thing.</p>
                    <br></br>
                    <p>Ted.Eschweiler@gmail.com</p>
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
            
        </div>
        
        
    )
}