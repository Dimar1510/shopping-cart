import ProductCard from "../components/ProductCard";
import PropTypes from "prop-types";

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

ProductsGrid.propTypes = {
    products: PropTypes.array
}

export default ProductsGrid;