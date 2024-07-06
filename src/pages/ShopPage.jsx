import { useEffect, useState } from "react";
import ProductsGrid from "../components/ProductsGrid";
import useFetch from "../hooks/useFetch";
import "../styles/ProductsGrid.css";
import "../styles/ShopPage.css";
import SortSelect from "../components/SortSelect";
import { Link } from "react-router-dom";
import SearchField from "../components/SearchField";
import Loading from "../components/Loading";

function ShopPage() {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const { data, error, loading } = useFetch();

  const [sort, setSort] = useState("default");
  const [ascend, setAscend] = useState(true);
  const [search, setSearch] = useState("");

  const [random, setRandom] = useState(1);

  useEffect(() => {
    if (data) {
      setAllProducts(data);
    }
  }, [data]);

  useEffect(() => {
    setProducts(allProducts);
  }, [allProducts]);

  useEffect(() => {
    handleSort();
  }, [sort, ascend]);

  useEffect(() => {
    handleSearch();
  }, [search]);

  useEffect(() => {
    document.title = "Shop online | CoffeeShop";
  }, []);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 19) + 1);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleSort() {
    const newProducts = [...products];
    if (sort === "default") {
      newProducts.sort((a, b) =>
        a.id > b.id ? (ascend ? 1 : -1) : ascend ? -1 : 1
      );
    }
    if (sort === "price_low") {
      newProducts.sort((a, b) =>
        a.price > b.price ? (ascend ? 1 : -1) : ascend ? -1 : 1
      );
    }
    if (sort === "roast_low") {
      newProducts.sort((a, b) =>
        a.roast_level > b.roast_level ? (ascend ? 1 : -1) : ascend ? -1 : 1
      );
    }
    setProducts(newProducts);
    setAllProducts(newProducts);
  }

  function handleAscend() {
    setAscend(!ascend);
  }

  function handleSearch() {
    setProducts(
      allProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }

  function handleResetFilters() {
    setAscend(true);
    setSort("default");
    setSearch("");
  }

  return (
    <>
      <div className="shop page">
        <section className="banner">
          <div className="banner-wrapper">
            <h2 className="banner-title">All coffee products</h2>
            <p className="banner-content">
              Explore our coffee collection with a variety of beans from around
              the world. Classic and dessert varieties: delicate natural notes
              and bright aromatic tastes. Every coffee lover will find his ideal
              drink. Immerse yourself in the magical world of coffee!
            </p>
            <Link to={`/shop/${random}`} className="hero-link">
              Random coffee
            </Link>
          </div>
        </section>
        {error && (
          <p style={{ textAlign: "center" }}>Api error, check back later</p>
        )}
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="filters-wrapper">
              <div className="filters-selectors">
                <SortSelect
                  handleAscend={handleAscend}
                  sort={sort}
                  setSort={setSort}
                />

                <SearchField setSearch={setSearch} search={search} />
              </div>
              <div className="products-shown">
                Products shown: {products.length} / {allProducts.length}
                <button className="btn-filter" onClick={handleResetFilters}>
                  Reset to default
                </button>
              </div>
            </div>
            <ProductsGrid products={products} />
            {products.length === 0 && search !== "" && (
              <p
                style={{
                  textAlign: "center",
                  padding: "2rem",
                  fontSize: "1.5rem",
                }}
              >
                No search results
              </p>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default ShopPage;
