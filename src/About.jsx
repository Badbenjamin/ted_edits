import TopBar from "./TopBar"
import Footer from "./Footer"
import TedPic from "../public/ted pic.jpg"

export default function About(){
    return(
        <div className="app-container">
            <div className="header">
                <TopBar/>
            </div>
            <div className="about-container">
                <div className="about-image">
                    <img className="ted-pic" src={TedPic}/>
                </div>
                <div className="about-paragraph">
                    <p>Ted Eschweiler is a Brooklyn based editor with experience in documentary, branded content, and a specialty in adult animated comedy. His work has been featured every which way TV spews including on Showtime, Comedy Central, and Paramount Plus. In his free time away from an edit bay, Ted likes to bike all through New York, hike outside of it, and generally be in the woods.
                    </p>
                    <p>Let’s make a thing.</p>
                    <p>Ted.Eschweiler@gmail.com</p>
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
            
        </div>
        
        
    )
}