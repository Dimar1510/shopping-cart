import { useEffect, useState } from "react";
import ProductsGrid from "../components/ProductsGrid";
import useFetch from "../hooks/useFetch";
import banner from '../assets/images/shop_banner.jpg'
import "../styles/ProductsGrid.css"
import "../styles/ShopPage.css"
import SortSelect from "../components/SortSelect";

import FilterAltOffOutlinedIcon from '@mui/icons-material/FilterAltOffOutlined';
import SearchField from "../components/SearchField";

function ShopPage() {
    const [allProducts, setAllProducts] = useState([])
    const [products, setProducts] = useState([])
    const { data, error, loading } = useFetch()
    
    const [sort, setSort] = useState('default');
    const [ascend, setAscend] = useState(true)
    const [search, setSearch] = useState('')

    useEffect(()=> {
        if (data) {
            setAllProducts(data)
            setProducts(allProducts)
            console.log(data)
        }
    }, [data])

    useEffect(()=>{
        handleSort()
    },[sort, ascend])

    useEffect(()=>{
        handleSearch()
    },[search])

    function handleSort() {
        const newProducts = [...products]
        if (sort === 'default') {
            
            newProducts.sort((a,b) => 
                a.id > b.id ? (ascend ? 1 : -1) : (ascend ? -1 : 1)
            )
        }
        if (sort === 'price_low') {
            newProducts.sort((a,b) => 
                a.price > b.price ? (ascend ? 1 : -1) : (ascend ? -1 : 1)
            )
        }
        if (sort === 'roast_low') {
            newProducts.sort((a,b) => 
                a.roast_level > b.roast_level ? (ascend ? 1 : -1) : (ascend ? -1 : 1)
            )
        }
        setProducts(newProducts)
        setAllProducts(newProducts)
    }

    function handleAscend() {
        setAscend(!ascend)
    }

    function handleSearch() {
        setProducts(allProducts.filter(item=> 
            item.name.toLowerCase().includes(search) 
        ))
    }

    function handleResetFilters() {
        setAscend(true)
        setSort('default')
        setSearch('')
    }

    return (  
        <>
            <div className="shop page">
                <section className="banner">
                    <div className="banner-img-wrapper">
                        <img src={banner} alt="banner" className="banner-img"/>
                    </div>
                    <div className="banner-text">
                        <h2 className="banner-title">All coffee products</h2>
                        <p className="banner-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolore doloremque iste assumenda asperiores, facilis qui laborum natus delectus debitis, esse temporibus voluptate facere odio, praesentium accusamus reiciendis repudiandae maiores.</p>
                    </div>
                </section>
                {error && 
                    <p>Api error, check back later</p>
                }
                {loading
                ? 
                    <p>Loading</p>
                : 
                    <>
                        <div className="filters-wrapper">
                            <div className="filters-selectors">
                                <SortSelect 
                                    handleAscend={handleAscend}
                                    sort={sort}
                                    setSort={setSort}
                                />

                                <SearchField 
                                    setSearch={setSearch}
                                    search={search}
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
                    </>
                }
            </div>
        </>
    );
}

export default ShopPage;