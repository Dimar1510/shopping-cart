import '../styles/ProductCard.css'
import bean from '../assets/images/bean.svg'
import CardButton from './CardButton';
import { useCart } from '../context/CartContext';


function ProductCard({id, name, image, price, roast}) {
    const {getItemCount} = useCart()
    const quantity = getItemCount(id)
    const totalPrice = (quantity * price).toFixed(2)

    const roastLevel = new Array(roast).fill(true)
    return (  
        <div className="product-card">
            <div className='product-name'>{name}</div>
            <div className="image-wrapper">
                <img src={image} alt={name} className="card-image" loading='lazy'/>
            </div>
            
            <div className="card-footer">
                <div className="product-roast">
                    {roastLevel.map((level, index) => {
                        return (
                            <img key={index} src={bean} alt="bean" className='bean' style={{width: 15}}/>
                        )
                    })}
                </div>
              
                <div className="price-wrapper">
                    <div className="weight">500g</div>
                    <div className='product-price'>
                        ${quantity > 1 ? totalPrice : price}
                    </div>
                </div>
                    <CardButton id={id}/>

            </div>
        </div>
    );
}

export default ProductCard;