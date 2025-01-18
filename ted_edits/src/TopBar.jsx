import WEED from './assets/weed-marijuana.gif'
import { Link, NavLink, useParams } from 'react-router'

export default function TopBar(){
    let params = useParams()
    console.log("p",params)
    function onClick(){
        console.log("click click...")
    }

    return(
        <div className="top-bar-container">
                <h1 className="title">TED EDITS</h1>
                {/* <img className="weed-gif" src={WEED}/> */}
                {/* <h2 onClick={onClick} className="work-about">WORK/ABOUT</h2> */}
                <Link to="/">WORK</Link>
                <Link to="/about">ABOUT</Link>
        </div>
    )
}