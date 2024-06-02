import newProduct from '../assets/images/product_new.png'
import newProduct2 from '../assets/images/product_new_2.png'
import CardButton from '../components/CardButton';
import { Tooltip } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

function NewProducts() {
    return (  
        <section className='home_main-new home-section'>
        <h3 className="home-section-title"> 
            New Arrivals
        </h3>
        <div className="new-content-wrapper">
            <div className="new-product">
                <div className="new-text">
                    <h4 className='new-title'>Sumatra blend</h4>
                    <p>
                        Get your day started with the bold and earthy flavors of Sumatra. Grown on the lush tropical slopes of the Gayo Highlands, this coffee is known for its full body, low acidity, and notes of dark chocolate and smoke.
                    </p>
                    <div className="product_buy">
                        <div className="price-wrapper">
                            <div className="weight">500g</div>
                            <div className='product-price'>
                            $8.99
                            </div>
                        </div>
                        <CardButton id={17}/>
                    </div>
                </div>
        
                <Tooltip title='Click to view the product' placement='top'>
                    <Link to={`/shop/17`} className='card-link'>
                        <img src={newProduct2} alt="Sumatra blend" className='new-img'  loading='lazy'/>
                    </Link>
                </Tooltip>  
            </div>
            <Divider/>
            <div className="new-product">
                <Tooltip title='Click to view the product' placement='top'>
                    <Link to={`/shop/18`} className='card-link'>
                        <img src={newProduct} alt="Bali bliss" className='new-img'  loading='lazy'/>
                    </Link>
                </Tooltip>  
             
                <div className="new-text">
                    <h4 className='new-title'>Bali bliss</h4>
                    <p>
                        Escape to the tropical paradise of Bali with this smooth and mellow blend. Grown on small family farms, this coffee is shade-grown and hand-picked for a rich and nuanced flavor profile. Notes of milk chocolate, hazelnut, and a hint of tropical fruit.
                    </p>
                    <div className="product_buy">
                        <div className="price-wrapper">
                            <div className="weight">500g</div>
                            <div className='product-price'>
                            $11.99
                            </div>
                        </div>
                        <CardButton id={18}/>
                    </div>
                </div>
            </div>
            
            
          
        </div>
    </section>
    );
}

export default NewProducts;