import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class AllProducts extends Component {

    render() {
        const {products} =  this.props;
        return <div>
           <p>All products:</p>
           {
               Object.keys(products).map((key) =>
                   <p><Link to={`/products/${products[key].id}`}>{products[key].name}</Link></p>
               )
           }
        </div>;
    }

}

export default AllProducts;
