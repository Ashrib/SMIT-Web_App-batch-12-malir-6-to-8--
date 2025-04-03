import './Navbar.css'
import Button from '../Button/Button.jsx';

let  Navbar = ({title,color})=>{



    return(
        <div className="main">
            <h2>{title}</h2>
            <h2>{color}</h2>
            {/* <Button/> */}
        </div>

        
    );
}

export default Navbar;