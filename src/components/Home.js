import React from "react";

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to our online store!</h2>
      <p>
        We have thousands of books, electronics, toys and more available for 
        purchase. Browse our aisles and find exactly what you're looking for.
      </p>  
      <p>
        Browse our curated collections:
      </p>
      <ul>     
        <li>
          <a href="/store?category=books">Books</a>
        </li>  
        <li>
          <a href="/store?category=electronics">Electronics</a>      
        </li>
        <li>     
           <a href="/store?category=toys">Toys</a>
        </li>
        {/* Other categories links */}       
      </ul>      
      <p>
        Have fun shopping!    
      </p>
    </div>  
  );
};

export default Home;

