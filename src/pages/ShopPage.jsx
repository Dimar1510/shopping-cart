import { useEffect, useState } from "react";
import ProductsGrid from "../components/ProductsGrid";
import useFetch from "../hooks/useFetch";
import banner from '../assets/images/shop_banner.jpg'
import "../styles/ProductsGrid.css"
import "../styles/ShopPage.css"
import SortSelect from "../components/SortSelect";
import Filter from "../components/Filter";
import FilterAltOffOutlinedIcon from '@mui/icons-material/FilterAltOffOutlined';

function ShopPage() {
    const [allProducts, setAllProducts] = useState([])
    const [products, setProducts] = useState([])
    const { data, error, loading } = useFetch()
    
    const [sort, setSort] = useState('default');
    const [ascend, setAscend] = useState(true)
    const [filter, setFilter] = useState([]);

    useEffect(()=> {
        if (data) {
            setAllProducts(data)
            setProducts(allProducts)
            // console.log(data)
        }
    }, [data])

    useEffect(()=>{
        handleSort()
    },[sort, ascend])

    function handleSort() {
        const newProducts = [...products]
        if (sort === 'default') {
            setProducts(newProducts.sort((a,b) => 
                a.id > b.id ? (ascend ? 1 : -1) : (ascend ? -1 : 1)
            ))
        }
        if (sort === 'price_low') {
            setProducts(newProducts.sort((a,b) => 
                a.price > b.price ? (ascend ? 1 : -1) : (ascend ? -1 : 1)
            ))
        }
        if (sort === 'roast_low') {
            setProducts(newProducts.sort((a,b) => 
                a.roast_level > b.roast_level ? (ascend ? 1 : -1) : (ascend ? -1 : 1)
            ))
        }

    }

    function handleAscend() {
        setAscend(!ascend)
    }

    function handleResetFilters() {
        setAscend(true)
        setFilter([])
        setSort('default')
    }


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
                <div className="filters-wrapper">
                    <div className="filters-selectors">
                        <SortSelect 
                            products={products} 
                            setProducts={setProducts} 
                            allProducts={allProducts}
                            handleAscend={handleAscend}
                            sort={sort}
                            setSort={setSort}
                            ascend={ascend}
                        />
                        <Filter 
                            products={products} 
                            setProducts={setProducts} 
                            allProducts={allProducts}
                            filter={filter}
                            setFilter={setFilter}
                            setSort={setSort}
                            sort={sort}
                        />
                    </div>
                    <div className="products-shown">
                        Products shown: {products.length} / {allProducts.length}
                        <button
                            className="btn-filter"
                            onClick={handleResetFilters}
                        ><FilterAltOffOutlinedIcon/>Reset filters</button>
                    </div>
                    
                </div>
                <ProductsGrid products={products}/>
            </div>
        </>
    );
}

export default ShopPage;