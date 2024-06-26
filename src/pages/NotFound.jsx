import { useEffect } from "react";
import '../styles/NotFound.css'
import notfound from '../assets/images/404.jpg'
import { Link } from "react-router-dom";


function NotFound() {

    useEffect(()=>{
        document.title = `404 | CoffeeShop`
    },[])

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return ( 
        <div className="notfound">
            <div className="notfound-image-wrapper">
                <img src={notfound} alt="404" className="notfound-image" />
            </div>
            <div className="notfound-content">
                <h3 className="notfound-header">Would you look at that</h3>
                <p>The page you're looking for doesn't exist, not yet at least.<br/> Meanwhile you can visit our <Link to={'/shop'} className="notfound-link">shop</Link> or go to the <Link to={'/'} className="notfound-link">main page</Link></p>
            </div>
        </div>
    );
}

export default NotFound;