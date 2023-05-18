import { useNavigate } from "react-router-dom";
import './Header.css'

export default function Header(){
    const navigate = useNavigate();
    return(
        <>
        
        <div className="header">  
<button onClick={()=>navigate('/')}>Home</button>
<button onClick={()=>navigate('/login')}>Login</button>
<button onClick={()=>navigate('/register')}>Register</button>
<button onClick={()=>navigate('/aboutUs')}>About-Us</button>

        </div>
        </>
    )
}