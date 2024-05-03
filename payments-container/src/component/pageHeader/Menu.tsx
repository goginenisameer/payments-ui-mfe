
import { Link } from "react-router-dom";


const Menu = () : JSX.Element => {

    return (
        <ul className="nav">
            <li><Link to="/list">Payments List</Link></li>
            <li><Link to="/add">Payments Add</Link></li>         

        </ul>
    );
}

export default Menu;
