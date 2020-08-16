import React, {Component} from 'react';
import {BrowserRouter as Router, match, Switch, Route} from 'react-router-dom'
import AllProducts from './AllProducts'
import ProductDetail from './ProductDetail'

class Products extends Component {

state = { products: {
    bicycle: {
        id: 1,
        name: 'Bicycle',
        price: 30,
        quantity: 15,
        desc: 'Bicycle is Good'
    },
    TV: {
        id: 2,
        name: 'TV',
        price: 40,
        quantity: 16,
        desc: 'TV is Good'
    },
    pencil: {
        id: 3,
        name: 'Pencil',
        price: 50,
        quantity: 17,
        desc: 'Pencil is Good'
    },
}}

render() {
    return (
        <Router>
        <Switch>
            <Route exact path="/products"> <AllProducts products={this.state.products} /> </Route>
            <Route path="/products/:id" render={(props) =>
                 <ProductDetail {...props} products={this.state.products}/>} />
        </Switch>
        </Router>
    );
}
}

export default Products;