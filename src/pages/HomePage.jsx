import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import video from '../assets/video.mp4'
import '../styles/HomePage.css'
import NewProducts from '../components/NewProducts';
import Posts from '../components/Posts';
import Divider from '@mui/material/Divider';


function HomePage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (  
        <div className="home page">
            <div className="home_hero">
                <video autoPlay muted loop id='myVideo'>
                    <source src={video} type='video/mp4'/>
                </video>
                <div className="hero-content">
                    <h2 className="hero-title">Hello! <br/> We make tasty coffee</h2>
                    <p className="hero-text">And then we deliver it right to your door</p>
                    <Link to={`/shop`} className="hero-link">Shop now</Link>
                </div>
            </div>
            <div className='home_main'>
                <Divider sx={{width: '100%'}}/>
                <NewProducts/>
                <Divider sx={{width: '100%'}}/>
                <Posts/>
            </div>
        </div>
    );
}

export default HomePage;