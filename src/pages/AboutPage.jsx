import { useEffect } from "react";
import image from '../assets/images/about_img.jpg'
import '../styles/AboutPage.css'
import { Link } from "react-router-dom";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { Divider } from "@mui/material";

function AboutPage() {

    useEffect(()=>{
        document.title = `About | CoffeeShop`
    },[])

    return (  
        <div className="about page">
            <div className="product_links">
                <Link to={'/'}>Home</Link>
                /
                <Link to={'/about'}>About</Link>
            </div>
            <Divider/>
            <section className="about-section">
                <div className="flex-wrapper">
                    <div className="wrl">
                        <h2 className="section-title">We are young, bold and hungry! We love coffee very much and want to share it with you..</h2>
                        <p className="about-text">Every day we are looking for ways to improve the quality of our work in order to give you the pleasure of ordering your favorite drink.</p>
                        <p className="about-text">We have our own warehouse with coffee and we can deliver your order to anywhere in the capital in two days. Or maybe faster...</p>
                    </div>
                    <div className="wrr">
                        <img src={image} alt="about" className="about-image" loading="lazy"/>
                    </div>
                </div>
            </section>
            <Divider/>
            <section className="about-section">
                <h2 className="about-title section-title">
                    CoffeShop - everything here is arranged for convenience
                </h2>
                <div className="flex-wrapper">
                    <div className="about-card">
                        <h3 className="about-card-title">
                        <AttachMoneyOutlinedIcon fontSize="large"/>
                        Advantageous prices
                        </h3>
                        <p className="about-card-text">
                            CoffeShop sets minimum prices for the most popular products, and offers discounts and promotions every week.
                        </p>
                    </div>
                    <div className="about-card">
                        <h3 className="about-card-title">
                        <DeliveryDiningOutlinedIcon fontSize="large"/>
                        Free shipping
                        </h3>
                        <p className="about-card-text">
                            Fast delivery to your home or office within two days. We deliver free of charge (minimum order is $20).
                        </p>
                    </div>
                    <div className="about-card">
                        <h3 className="about-card-title">
                        <WorkspacePremiumOutlinedIcon fontSize="large"/>
                        Premium quality
                        </h3>
                        <p className="about-card-text">
                            CoffeeShop checks the quality of all our products. We work only with the strongest suppliers who undergo strict checks.
                        </p>
                    </div>
                </div>
            </section >
            <Divider/>
            <section  className="about-section">
                <div className="list-wrapper">
                    <h2 className="section-title">Briefly about us:</h2>
                    <ul className="about-list">
                        <li> We are driven by a constant desire to improve the quality of everything: from texts on the website to equipment in production; </li>
                        <li>We are 'customer first': if the order is lost or the taste is upset;</li>
                        <li>We are experts in what we do: top business officials are the main product specialists;</li>
                        <li>We hear you, always! We consider all requests regarding the site, without exception;</li>
                        <li>We work like clockwork: we haven’t missed a single roast since the day we opened.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;