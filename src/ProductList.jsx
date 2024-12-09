import React, { useState,useEffect } from 'react';
import './ProductList.css'
import CartItem from './CartItem';
// Add line
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
function ProductList() {
    const [showCart, setShowCart] = useState(false); 
    const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page
    const [addedToCart, setAddedToCart] = useState({}); // Code Kopiert
    const dispatch = useDispatch() // Code kopiert
//    const cart = useSelector((state) => state.cart.items);
//    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const plantsArray = [
        {
            category: "Funny Plants",
            plants: [
                {
                    name: "Lough Plant",
                    image: "https://cdn.openart.ai/uploads/image_YS0P5O6n_1718979828953_raw.jpg",       
                    description: "Product for funny work.",
                    cost: "$99.99"
                },
                {
                    name: "Stone Plant",
                    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6514541bca0a49dc899103a06d35ded29/Muggly-s-The-Face-Statue-Planter-Funny-Flower-Pot-Sculpture-Funny-Expression-Plant-Pots-Planters-Succulent.jpg_640x640Q90.jpg_.webp",
                    description: "Plants for outside.",
                    cost: "$88.88"
                },
            ]
        },
        {
            category: "Small & Big Plants",
            plants: [
                {
                    name: "Lavender field",
                    image: "https://www.mein-schoener-garten.de/sites/default/files/styles/discover_1x1/public/lavendel-lavandula-imperial-gem-florapress-01293420.jpg?h=cccf0af4&itok=j2XaQLme",
                    description: "You can sell a piece of the field.",
                    cost: "$155.24"
                },
                {
                    name: "Kaktus",
                    image: "https://medizin-transparent.at/wp-content/uploads/2017/12/2017-12-19_Kaktusfeige_600x400.jpg",
                    description: "Be carfull",
                    cost: "$55.55"
                },
            ]
        },
        {
            category: "Plants for eat",
            plants: [
                {
                    name: "Gurke",
                    image: "https://www.mein-schoener-garten.de/sites/default/files/styles/discover_1x1/public/gurken-aufmacher-iStock-497571672.jpg?h=8bc8548a&itok=f8_rQVpi",
                    description: "Good for salad.",
                    cost: "$0.50"
                },
                {
                    name: "Bio Peperoni",
                    image:"https://cdn.pflanzen-koelle.de/media/d7/c0/71/1662382103/peperoni-a-z.jpg",
                    description: "It's hot.",
                    cost: "$2.25"
                }
             ]
        },
    ];
   const styleObj={
    backgroundColor: '#4CAF50',
    color: '#fff!important',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignIems: 'center',
    fontSize: '20px',
   }
   const styleObjUl={
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
   }
   const styleA={
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
   }
   const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true); // Set showCart to true when cart icon is clicked
};

// const cart_quantity_count = 0 // cart.reduce((total, item) => total + (item.quantity || 1), 0);

const totalItems = 0 // cart.reduce((total, item) => total + (item.quantity || 1), 0);

const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
    setShowCart(false); // Hide the cart when navigating to About Us
};

   const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };
  const handleAddToCart = (product) => {
//     console.log("Items getting added...", product); // Neuer Code
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
       ...prevState,
       [product.name]: true, // Set the product name as key and value as true to indicate it's added to cart
     }));
  };  
    return (
        <div>
             <div className="navbar" style={styleObj}>
            <div className="tag">
               <div className="luxury">
               <img src="https://img.freepik.com/vektoren-premium/pflanze-in-topf-symbol-logo-vektor-illustration-design-vorlage_598213-1811.jpg" alt="" />
               <a href="/" style={{textDecoration:'none'}}>
                        <div>
                    <h3 style={{color:'white'}}>The funny other Plants</h3>
                    <i style={{color:'white'}}>Change your day</i>
                    </div>
                    </a>
                </div>
              
            </div>
            <div style={styleObjUl}>
                <div> <a href="#" onClick={(e)=>handlePlantsClick(e)} style={styleA}>Plants</a></div>
                <div> <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
                    <h1 className='cart'>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 256 256"   
                            id="IconChangeColor" 
                            height="68" 
                            width="68">
                            <rect width="156" height="156" fill="none"></rect>
                            <circle cx="80" cy="216" r="12"></circle>
                            <circle cx="184" cy="216" r="12"></circle>
                            <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" 
                            fill="none" 
                            stroke="#faf9f9" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            id="mainIconPathAttribute"
                            ></path>
                        </svg>
                    </h1>
                    </a>
    
                    <span


    style={{
        position: "absolute",
        top: "35px",
        right: "35px",
        backgroundColor: "blue",
        color: "white",
        borderRadius: "50%",
        width: "20px",
        height: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "14px",
        fontWeight: "bold",
      }}
    >
      {totalItems}
    </span>

                </div>
            </div>
        </div>
        {!showCart? (
        <div className="product-grid">
                {plantsArray.map((category, index) => (
    <div key={index}>
        <h1><div>{category.category}</div></h1>
        <div className="product-list">
            {category.plants.map((plant, plantIndex) => (
            <div className="product-card" key={plantIndex}>
                <img className="product-image" src={plant.image} alt={plant.name} />
                <div className="product-title">{plant.name}</div>
                {/*Similarly like the above plant.name show other details like description and cost*/}

                {/*Code erweitert*/}
                <div className="product-title">{plant.description}</div>
                <div className="product-title">{plant.cost}</div>

                <button
                    className={`product-button ${addedToCart.hasOwnProperty(plant.name) ? "disabled" : ""
                    }`}
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedToCart.hasOwnProperty(plant.name)} //Disable button if product is in disabledProducts
                    >
                    {addedToCart.hasOwnProperty(plant.name)
                        ? "Product added to your cart, Thanks"
                        : "Product Add to Cart"}
                </button>

            </div>
            ))}
        </div>
    </div>
    ))}


        </div>
 ) :  (
    <CartItem onContinueShopping={handleContinueShopping}/>
)}
    </div>
    );
}

export default ProductList;
