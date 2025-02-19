import IMDB from './assets/SOCIAL LOGOS/IMDb_Logo_Square_Gold.png'
import LINKEDIN from './assets/SOCIAL LOGOS/In-Blue-128@2x.png'
// import { useNavigate } from 'react-router'

export default function Footer(){
    // const navigate = useNavigate()

    function handleClick(link){
        window.location.href = link
    }

    return(
        <div className="footer-component">
            <span>ted.eschweiler@gmail.com</span>
            <img onClick={()=>{handleClick('https://www.imdb.com/name/nm3031565/?ref_=ext_shr_lnk')}} className='social-logo' src={IMDB} alt="imdb_logo"></img>
            <img onClick={()=>{handleClick('https://www.linkedin.com/in/ted-eschweiler/')}} className='social-logo' src={LINKEDIN} alt="imdb_logo"></img>
        </div>
    )
}