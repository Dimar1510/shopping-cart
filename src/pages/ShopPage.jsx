import { useEffect, useState } from "react";
import ProductsGrid from "../components/ProductsGrid";
import useFetch from "../hooks/useFetch";
import banner from '../assets/images/shop_banner.jpg'
import "../styles/ProductsGrid.css"
import "../styles/ShopPage.css"

function ShopPage() {
    
    const [products, setProducts] = useState([])
    const { data, error, loading } = useFetch()
    
    useEffect(()=> {
        if (data) {
            setProducts(data)
            console.log(data)
        }
    }, [data])
    
    if (error) return <p>Api error, check back later</p>
    if (loading) return <p>There will be a loading page here</p>
    
    return (  
        <>
            <div className="shop page">
                <section className="banner">
                    <div className="banner-img-wrapper">
                        <img src={banner} alt="banner" className="banner-img"/>
                    </div>
                    <div className="banner-text">
                        <h2 className="banner-title">All coffee</h2>
                        <p className="banner-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolore doloremque iste assumenda asperiores, facilis qui laborum natus delectus debitis, esse temporibus voluptate facere odio, praesentium accusamus reiciendis repudiandae maiores.</p>
                    </div>
                </section>
                <ProductsGrid products={products}/>
            </div>
        </>
    );
}

export default ShopPage;