import React, { createContext } from "react";

export const Store = createContext()

const initialState = {
    cart: { cartItems: []},
}

function reducer(state, action) {
    switch(action.type)
    {
        case 'CART_ADD_ITEM': {
            const newItem = action.payload;
            const existItem = state.cart.cartItems.find(item => item.id === newItem.id);
            const cartItems = existItem
            ? state.cart.cartItems.map(item => item.id === existItem.id ? newItem : item)
            : [...state.cart.cartItems, newItem];
            return { ...state, cart: { cartItems } };
        }
        default:
            return state;
    }
}

export function StoreProvider({children}) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{children}</Store.Provider>
}