import { createContext, useReducer, useState } from 'react'
import { cartInitialState, reducer } from '../reducers/cart'

export const CartContext = createContext()

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, cartInitialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({type: 'CLEAN_CART'})

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            clearCart,
            removeFromCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}