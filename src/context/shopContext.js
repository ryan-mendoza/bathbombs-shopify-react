import React, { Component } from 'react'
import Client from 'shopify-buy';

const ShopContext = React.createContect();

const client = Client.buildClient({
    domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
});

export class ShopProvider extends Component {

    state = {
        product: {},
        products =[],
        checkout: {},
        isCartOpen = false,
        isMenuOpen = false
    }

    createCheckout = async () => {

    }

    fetchCheckout = async () => {

    }

    addItemToCheckout = async () => {

    }

    removeLineItem = async (lineItemIdsToRemove) => {

    }

    fetchAllProducts = async () => {
        const products = await client.product.fetchAll();
        this.setState({ products: products })
    }

    fetchProductWithHandle = async (handle) => {
        const product = await client.product.fetchByHandle(handle);
        this.setState({ product: product })
    }

    closeCart = () => { }

    openCart = () => { }

    closeMenu = () => { }

    openMenu = () => { }

    render() {
        return (
            <ShopContext.Provider>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer

export { ShopConsumer, ShopContext }

export default ShopProvider
