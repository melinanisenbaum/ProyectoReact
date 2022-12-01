import logo from '../../Header/logo.svg'
import {FaUserAlt,FaSearch,FaShoppingCart}  from "react-icons/fa"


const BotHeader = () => (
    
    <div className="contenedor">
        <div className='barra2 navegacion'>
            <div className='navegacion2'>
                <a href="##">
                    <img src={logo} alt="" />
                </a>

            </div>
            <div>
                <nav className='nav-bar'>
                    <a href={"##"}>Home</a>
                    <a href={"##"}>Collection</a>
                    <a href={"##"}>Shoes</a>
                    <a href={"##"}>Boots</a>
                    <a href={"##"}>Climbing</a>
                    <a href={"##"}>Pages</a>
                </nav>
            </div>
            <div>             
                <a href={"##"}><FaSearch /></a>
                <a href={"##"}><FaUserAlt /></a>
                <a href={"##"}><FaShoppingCart /></a>                    
                
            </div>
        </div>
    </div>
    
)
//<img src={""} alt={"todavia no hay"} />
export default BotHeader;