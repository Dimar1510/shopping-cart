import espresso from "src/assets/images/espresso.jpg";
import roast from "src/assets/images/roast.jpg";
import water from "src/assets/images/water.jpg";
import { Link } from "react-router-dom";

interface IPost {
  title: string;
  text: string;
  category: string;
  image: string;
}

const posts: IPost[] = [
  {
    title: "What is a roast profile",
    text: "The roast level is essentially its color. But profile is a much more complex part of coffee roasting. The profile cannot be distinguished visually, but it affects the taste even more than the degree.",
    category: "Coffee roast",
    image: roast,
  },
  {
    title: "Making espresso",
    text: "Espresso is a complex and interesting drink. He is considered one of the most picky about cooking conditions and barista skills. Read how to make delicious beverage.",
    category: "How to make coffee",
    image: espresso,
  },
  {
    title: "Choosing the right water",
    text: "Coffee is 99% water. It’s clear (no pun intended) that you can’t make delicious coffee with bad water, but how can you identify bad water?",
    category: "Preparation",
    image: water,
  },
];

const Posts = () => {
  return (
    <section className="flex flex-col gap-8">
      <h3 className="self-baseline uppercase font-semibold">
        Latest community posts
      </h3>
      <div className="flex gap-8 flex-wrap laptop:flex-col">
        {posts.map((post, index) => {
          return (
            <div className="flex-1 flex flex-col gap-4" key={index}>
              <img
                src={post.image}
                alt={post.title}
                className="w-full aspect-square object-cover object-center"
                loading="lazy"
              />
              <div className="flex flex-col gap-2">
                <h5 className="uppercase text-gray-400 font-semibold tracking-widest">
                  {post.category}
                </h5>
                <h4 className="text-xl font-semibold mt-4">{post.title}</h4>
                <p>{post.text}</p>
                <Link
                  to={"/blog"}
                  className="underline uppercase text-sm tracking-wider hover:font-semibold"
                >
                  Read more
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Posts;
