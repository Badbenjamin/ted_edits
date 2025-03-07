import LOGO from './assets/TED EDITS_V1 Cropped.png'
import { Link, NavLink, useParams, useNavigate } from 'react-router'


export default function TopBar(){
    let params = useParams()
    let navigate = useNavigate()

    // console.log("p",params)
    // function onClick(){
    //     console.log("click click...")
    // }

    // onClick(()=>{

    // })

    return(
        <div className="top-bar-container">
            <div className='top-bar-left'>
                <img className="logo" onClick={()=>{navigate('/')}} src={LOGO} ></img>
            </div>
            <div className='top-bar-right'>
                <span onClick={()=>{navigate('/')}}>WORK </span><span></span><span onClick={()=>{navigate('/about')}}> ABOUT</span>
            </div> 
        </div>
    )
}