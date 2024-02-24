import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from "react-router-dom";
import HomeV2 from './components/home-v2';
import About from './components/about';
import Error from './components/404';
import Shop from './components/shop';
import ShopGrid from './components/shop-grid';
import ProdductDetails from './components/product-details';
import Contact from './components/contact';
import Privacy from "./components/privacy";
import Navbar from "./components/global-components/navbar-v2";

import {Toaster} from "react-hot-toast";

import "./assets/css/custom-css.scss";

class Root extends Component {
    render() {
        return (
            <HashRouter basename="/">
                <div>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={HomeV2}/>
                        <Route path="/product-details/:id" component={ProdductDetails}/>
                        <Route path="/shop-grid/" component={ShopGrid}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/about" component={About}/>
                        <Route path="/shop" component={Shop}/>
                        <Route path="/politica-de-privacidad" component={Privacy}/>
                        <Route component={Error}/>

                    </Switch>
                </div>
                <Toaster />
            </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root/>, document.getElementById('quarter'));
