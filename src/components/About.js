import React from "react";

const About = () => {
  return (
    <div>
      <h2>About This App</h2>
      <p>
        This shopping cart application was created to practice building a 
        full-stack e-commerce website in React. It demonstrates using:
      </p>
      <ul>
        <li>React.js - To build the UI</li>
        <li>React Router - For routing between pages</li>      
        <li>React Context API - To manage the cart state</li>
        <li>Bootstrap - For responsive design</li>      
      </ul>
      <p>
        The app has the basic functionality of an online shopping cart:
      </p>
      <ul>
        <li>Customers can browse a list of products </li> 
        <li>Add products to their cart</li>   
        <li>Modify quantities and remove items from cart</li>
        <li>View the cart and total amount due</li>
      </ul>      
      <p>
        The cart state is managed using React Context API and persisted to local
        storage, so it survives page reloads.
      </p>      
      {/* Rest of description */}
    </div>
  );
};

export default About;

