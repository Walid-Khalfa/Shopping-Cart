import React from "react";
import { Link } from 'react-router-dom';

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
          <Link to="/store?category=books">Books</Link>        
        </li>               
        <li>          
          <Link to="/store?category=electronics">Electronics</Link>              
        </li>
        <li>           
          <Link to="/store?category=toys">Toys</Link>
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
