import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";

function ProductsGrid({products}) {
    
    
    return (  
        <div className="products">
                {products.map((item) => {
                    return (
                        <ProductCard 
                            key={item.id}
                            name={item.name} 
                            price={item.price} 
                            image={item.image_url}
                            roast={item.roast_level}
                            id={item.id}
                            region = {item.region}
                        />
                    )
                })}
            </div>
    );
}

export default ProductsGrid;