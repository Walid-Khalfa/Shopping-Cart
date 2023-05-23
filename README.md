# Shopping Cart Application

This is a shopping cart application built with React.

## Features

- Add products to cart 
- Increase, decrease and remove products from cart
- Persists cart in local storage
- Calculate total price of cart
- Responsive design

## Pages

- Home page 
- Store page (with list of products)
- About page

## Technologies Used

- React.js - UI library
- React Router DOM - For routing between pages
- Bootstrap - UI Framework  
- React Context API - For managing the cart state

## Usage

1. Clone the repo
2. Run `npm install` to install dependencies 
3. Run `npm start` to start the development server
4. The app will be served at `http://localhost:3000`

## Components

- Navbar - Contains navigation links and cart button
- Store - Displays list of products with 'Add to cart' button  
- ShoppingCart - Popover showing cart items and total
- CartItem - Shows details of single cart item
- FormatCurrency - Reusable function to format price as currency  
- StoreItem - Shows details of single store item

## Context

The ShoppingCartContext is used to manage:

- Cart items state  
- Functions to update cart:
  - increaseQuantity
  - decreaseQuantity
  - removeItem
  - etc.

Components can subscribe to the context using the `useShoppingCart` hook to access cart functions and state. 

This allows sharing of cart state between components.

