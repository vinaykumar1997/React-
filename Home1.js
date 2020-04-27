import React, { useState } from 'react';
import { Route,Switch } from 'react-router-dom';
import data from './data';
// import data1 from './data1';


//Context
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';

import ShoppingCart1 from './components/ShoppingCart';

function Home1() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

//    const [products1] = useState(data1);
//    const [cart1, setCart1] = useState([]);


  const addItem = item => {
    setCart([...cart, item]);
  };
//   const addItem1 = item => {
//     setCart([...cart1, item]);
//   };
  const removeItem = itemId => {
    setCart(cart.filter(item => itemId !== item.id));
  };

  return (
    <div className='App'>
      <Navigation cart={cart} />
      <ProductContext.Provider value={{ products, addItem }}>
        
        <CartContext.Provider value={{ cart, removeItem }}>
        {/* <Products />
        <ShoppingCart /> */}
        <Route exact path='/p'>
        <Products />
          </Route>

          <Route path='/cart'>
          <ShoppingCart1 />
          </Route>
          
        
        </CartContext.Provider>
      </ProductContext.Provider>
      {/* <ProductContext.Provider value={{ products1, addItem1 }}>
        
        <CartContext.Provider value={{ cart1, removeItem }}>
        <Route exact path='/'>
            <Products />
          </Route>
          <Route exact path='/product'>
            <Products1 />
          </Route>

          <Route path='/cart'>
            <ShoppingCart />
          </Route>
        </CartContext.Provider>
      </ProductContext.Provider> */}
    </div>
  );
}

export default Home1;