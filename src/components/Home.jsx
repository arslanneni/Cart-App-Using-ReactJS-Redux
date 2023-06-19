import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";
const img3= "https://m.media-amazon.com/images/I/8189uwDnMkL._AC_SX679_.jpg";
const img4="https://m.media-amazon.com/images/I/61wf5zmuGqL._AC_SX679_.jpg";
const img5="https://m.media-amazon.com/images/I/41X0P++sWPL.jpg";
const img6="https://m.media-amazon.com/images/I/61CqYq+xwNL._AC_SX425_.jpg";
const img7="https://m.media-amazon.com/images/I/51xZdrJfCzL._AC_SY879_.jpg";
const img8="https://m.media-amazon.com/images/I/610fWj0I+iS._AC_UL1500_.jpg";
const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Black Shoes",
      price: 490,
      imgSrc: img2,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
    {
      name: "Mouse",
      price: 500,
      imgSrc: img3,
      id: "sdjfdlaa22jsdbhjabhsjdfdfv",
    },
    {
      name: "Gaming Keyboard",
      price: 400,
      imgSrc: img4,
      id: "sdjfdlaajsddbhjabhsjdfdfv",
    },
    {
      name: "Book",
      price: 490,
      imgSrc: img5,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
    {
      name: "Logitech Headsets",
      price: 300,
      imgSrc: img6,
      id: "sdjfdlaajsdbhjabhsjssdfdfv",
    },
    {
      name: "Ear Buds",
      price: 280,
      imgSrc: img7,
      id: "sdjfdlaajsdbhjassbhsjdfdfv",
    },
    {
      name: "Hoodie",
      price: 490,
      imgSrc: img8,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
  ];


  const dispatch = useDispatch();
  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    console.log(options);
    toast.success("Added to Cart");
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;