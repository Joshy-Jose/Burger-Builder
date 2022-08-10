import React, {Component} from 'react';
import Layout from  './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/BurgerBuilder/Checkout/Checkout';
import { Routes, Route } from "react-router-dom";



class App extends Component {



  render() {
    return (
      <div>
       <Layout>
         <Routes>
            <Route path="/checkout" component={Checkout} />  
            <Route path="/" exact component= {BurgerBuilder} />
          </Routes>
       </Layout>
      </div>
    );

  }

}

export default App;
