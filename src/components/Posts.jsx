import espresso from '../assets/images/espresso.jpg'
import roast from '../assets/images/roast.jpg'
import water from '../assets/images/water.jpg'
import { Link } from 'react-router-dom'

const posts = [
    {
        title: 'What is a roast profile',
        text: 'The roast level is essentially its color. But profile is a much more complex part of coffee roasting. The profile cannot be distinguished visually, but it affects the taste even more than the degree.',
        category: 'Coffee roast',
        image: roast
    },
    {
        title: 'Making espresso',
        text: "Espresso is a complex and interesting drink. He is considered one of the most picky about cooking conditions and barista skills. Read how to make delicious beverage.",
        category: 'How to make coffee',
        image: espresso
    },
    {
        title: 'Choosing the right water',
        text: "Coffee is 99% water. It’s clear (no pun intended) that you can’t make delicious coffee with bad water, but how can you identify bad water?",
        category: 'Preparation',
        image: water
    },
]

function Posts() {

    return (  
        <section className="posts home-section">
            <h3 className="home-section-title">Latest community posts</h3>
            <div className="posts-wrapper">
                {posts.map((post, index)=> {
                    return (
                        <div className="blog-post" key={index}>
                            <img src={post.image} alt={post.title} className='post-image' loading='lazy'/>
                            <div className="post-content">
                                <h5 className="post-category">{post.category}</h5>
                                <h4 className="post-title">{post.title}</h4>
                                <p className="post-text">{post.text}</p>
                                <Link to={'/blog'} className='post-link'>Read more</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Posts;