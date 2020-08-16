import React, {Component} from 'react';


class ProductDetail extends Component {
    
    render() {
        const {match: {params}} = this.props; 
        const [item] = Object.values(this.props.products).filter((item)=> item.id == params.id);

        return <div>
            <p style={{"font-weight": "bold"}}> Product Detail</p>
            <p>Name: {`${item.name}`}</p>
            <p>Id: {`${item.id}`}</p>
            <p>Price: {`${item.price}`}</p>
            <p>Quantity: {`${item.quantity}`}</p>
            <p>Desc: {`${item.desc}`}</p>
            <p>Url: {`/products/${params.id}`}</p>
            </div>
    }
}

export default ProductDetail;