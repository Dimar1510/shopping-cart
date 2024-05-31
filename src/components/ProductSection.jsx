import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import '../styles/ProductSection.css'
import PropTypes from "prop-types";

function ProductSection({description}) {
    return (  
        <section className="product_section">
            <article> 
                <h3 className="section-title">Description</h3>
                <p>{description}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde ipsa dicta ullam praesentium eos recusandae laudantium aut perferendis commodi. Velit accusamus tempore magni iure, placeat quos quod explicabo iste. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, sit! Quam impedit laborum aperiam, natus deleniti placeat eligendi quas in temporibus atque! Quo, dolorum voluptates nobis aperiam in facere maxime!</p>
            </article>
            <article>
                <h3 className="section-title">Delivery</h3>
                <p>
                You can place an order in the amount of $20, and we will deliver it to any city to the point of delivery or to your door.
                </p>
                <p>
                Delivery costs are calculated automatically in the shopping cart and depend on your city, amount and weight of the order. We almost always deliver free of charge.   
                </p>
            </article>
            <article>
                <h3 className="section-title">Warranty</h3>
                <p>
                We roast this coffee every day. If you don’t like the coffee, we’ll replace it free of charge or refund your payment.
                </p>
            </article>
            <article>
                <h3 className="section-title">Storage</h3>
                <div className="article-wrapper">
                    <div>
                        <h4 className="section-title">
                            <ChairOutlinedIcon/>
                            Room temperature
                        </h4>
                        <p>
                            In a closed package at room temperature, coffee can be stored for 1–2 months. 
                        </p>
                        <p>
                            After opening the package, this period is shortened, so we recommend buying coffee in the amount that you will drink in one to two weeks maximum.
                        </p>
                        <p>
                            Once ground, the freshness of the coffee dissipates in minutes, not days. Therefore, it is better to grind the grains immediately before cooking.
                        </p>
                    </div>
                    <div>
                        <h4 className="section-title">
                            <AcUnitOutlinedIcon/>
                            Freezer
                        </h4>
                        <p>
                            In a closed package in the freezer
                            coffee can be stored for up to six months.
                        </p>
                        <p>
                            It is important that there are no foreign odors, because coffee can easily absorb them. This way, coffee can be stored for up to six months, but it can only be defrosted once at room temperature for 10–12 hours. It cannot be re-frozen.
                        </p>
                        <p>
                            <b>Do not store coffee in the refrigerator!</b>
                        </p>
                    </div>
                </div>
            </article>

        </section>
    );
}

ProductSection.propTypes = {
    description: PropTypes.string
}

export default ProductSection;