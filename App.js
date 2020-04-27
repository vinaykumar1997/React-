import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import './App.css';
import { NavLink } from 'react-router-dom';

//Context
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';


import ShoppingCart from './components/ShoppingCart';
import Login from './Login'
import Register from './Register'

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

   


  const addItem = item => {
    setCart([...cart, item]);
  };
 
  const removeItem = itemId => {
    setCart(cart.filter(item => itemId !== item.id));
  };

  return (
    <div className='App'>
      
      <Navigation cart={cart} />
      <ProductContext.Provider value={{ products, addItem }}>
        
        <CartContext.Provider value={{ cart, removeItem }}>
          <Route exact path='/'>
            <Products />
            </Route>
            <Route exact path='/login'>
            <Login />
            </Route>
            <Route exact path='/register'>
            <Register />
            </Route>
          
          

          <Route path='/cart'>
            <ShoppingCart />
          </Route>
        </CartContext.Provider>
      </ProductContext.Provider>
     
    </div>
  );
}

export default App;
// import React, { Component } from 'react';
// import { Route,Switch,BrowserRouter } from 'react-router-dom';
// import Home1 from './Home1';

// import ShoppingCart1 from './components/ShoppingCart';

// import Login from './Login'
// import Register from './Register'
// class App extends React.Component
// {

// render()
// {


//   return (
//     <div className='App'>
      
//       <BrowserRouter>
//       <Switch>
//       <Route exact path='/'>
//              <Login />
//              </Route>
//              <Route exact path='/register'>
//              <Register />
//              </Route>
//              <Route exact path='/login'>
//              <Login />
//              </Route>

     
//              <Route exact path='/p'>
//             <Home1 />
//           </Route>
          
         
         
//           <Route  path='/cart'>
            
//             <ShoppingCart1 />
//           </Route>
//           </Switch>
//           </BrowserRouter>
//     </div>
//   );
// }
// }

// export default App;