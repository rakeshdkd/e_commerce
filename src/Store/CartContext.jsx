import React from 'react'

const CartContext = React.createContext({
items:[],
addItem:(item)=>{},
cartItems:0,
totalAmmount:0

})

export default CartContext