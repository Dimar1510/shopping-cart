import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import NotFound from "./NotFound";
import bean from '../assets/images/bean.svg'
import '../styles/ProductPage.css'
import CardButton from "../components/CardButton";
import ProductSection from "../components/ProductSection";


function ProductPage() {
    const { productId } = useParams();

    const [product, setProduct] = useState(null)
    
    const [products, setProducts] = useState([])
    const { data, error, loading } = useFetch()
    
    const [roast, setRoast] = useState([])

    useEffect(()=> {
        if (data) {
            setProducts(data)
        }
    }, [data])

    useEffect(()=> {
        if (products.length > 0) {
            setProduct(products.find(p => p.id === Number(productId)))
        }
    }, [products])

    useEffect(()=>{
        if (product) {
            const roastLevel = new Array(5).fill(false)
            for (let i = 0; i < product.roast_level; i++) {
                roastLevel[i] = true
            }
            setRoast(roastLevel)
        }
    }, [product])
    
    
    if (error) return <p>Api error, check back later</p>
    if (loading) return <p>There will be a loading page here</p>
    
 

    return ( 
        product 
        ? 
        
        <div className="product page">
            <div className="product_links">
                <Link to={'/'}>Home</Link>
                /
                <Link to={'/shop'}>Shop</Link>
                /
                <Link to={`/${productId}`}>{product.name}</Link>
            </div>
            <div className="product_wrapper">
                <img src={product.image_url} alt={product.name} className="product_img"/>
                <div className="product_main">
                    <h2 className="product_title">{product.name}</h2>
                    <p className="product_description">{product.description}</p>
                    <div className="roast-wrapper">
                        <div className="product-label">Roast level</div>
                        <div className="product-roast">
                            {roast.map((level, index) => {
                                return (
                                    <img key={index} src={bean} alt="bean" className={level ? 'bean' : 'bean empty'} style={{width: 15}}/>
                                )
                            })}
                        </div>
                    </div>
                    <div className="product_region">
                        <div className="product-label">Region</div>
                        {product.region}
                    </div>
                  
                    <div className="product_flavors">
                        <div className="product-label">Flavor profile</div>
                        <div className="flavors-wrapper">
                            {product.flavor_profile.map((flavor, index) => {
                                return (
                                    <span key={index} className="flavor">{flavor}</span>
                                )
                            })}
                        </div>
                    </div>
                    <div className="product_grinds">
                        <div className="product-label">Grind options</div>
                        <div className="grinds-wrapper">
                            {product.grind_option.map((grind, index) => {
                                return (
                                    <span key={index} className="grind">{grind}</span>
                                )
                            })}
                        </div>
                    </div>
                    <div className="product_buy">
                        <div className="price-wrapper">
                            <div className="weight">500g</div>
                            <div className='product-price'>
                                ${product.price}
                            </div>
                        </div>
                        <CardButton id={product.id}/>
                    </div>
                </div>
            </div>
            <ProductSection description={product.description}/>                
        </div>
        : 
        <div>
            <NotFound/>
        </div>

    );
}

export default ProductPage;